# BrutalGPT Security Refactor Report

## Summary

This report details the security improvements made to the BrutalGPT project to implement a safe, researcher-friendly static + local proxy setup. The refactor focused on removing insecure client-side key storage while maintaining all existing functionality.

## Changes Made

### 1. Removed Insecure Client-Side Key Storage
- **Files Modified**: `index.html`
- **Changes**:
  - Removed storage of `apiKey` in `localStorage` and `sessionStorage`
  - Masked any existing API keys with `[REDACTED_API_KEY_REMOVED]`
  - Removed hardcoding of any `sk-...` strings in client-side code
  - API key now only exists in memory (JS variable) during runtime

### 2. Updated UI for Key Input
- **Files Modified**: `index.html`
- **Changes**:
  - Kept simple key-input box in UI for runtime API key entry
  - API key stored only in a JS variable (memory), not persisted anywhere
  - Updated user configuration to never save API keys to localStorage

### 3. Added Secure Local Proxy Server
- **Files Created**: `server.js`
- **Features**:
  - Express.js server implementation
  - Uses node-fetch for HTTP requests
  - Reads `OPENROUTER_API_KEY` from `.env` file
  - POST endpoint `/api/openrouter/chat` forwards requests to OpenRouter API
  - Proper error handling and console logging
  - Warning when `.env` key is missing

### 4. Updated Front-End API Calls
- **Files Modified**: `index.html`
- **Changes**:
  - Replaced direct fetches to `https://api.openrouter.ai/v1/...` with `/api/openrouter/chat`
  - Removed Authorization headers from front-end code
  - Added `callOpenRouter()` helper function:
    ```js
    async function callOpenRouter(payload) {
      const res = await fetch('/api/openrouter/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Proxy error: ' + res.status);
      return await res.json();
    }
    ```

### 5. Added Environment and Ignore Files
- **Files Created**: 
  - `.env.example` - Example environment configuration
  - `.gitignore` - Prevents committing sensitive files

### 6. Updated Documentation
- **Files Modified**: `README.md`
- **Changes**:
  - Added installation instructions for dependencies
  - Added instructions for creating `.env` file with API key
  - Added instructions for running local proxy server
  - Added security disclaimer about API key handling
  - Updated project structure documentation

## Security Improvements

### Before Refactor
- API keys stored in browser localStorage
- Hardcoded API keys in client-side files
- Direct API calls exposing keys in browser console
- Risk of accidental key exposure in version control

### After Refactor
- API keys never stored in browser storage
- API keys only exist in server-side `.env` file
- Client-side code communicates with local proxy server
- API keys never exposed to browser console
- `.gitignore` prevents committing `.env` file
- Keys only loaded into memory at runtime

## Files Summary

### Files Modified
- `index.html` - Updated API handling and key storage
- `README.md` - Updated documentation and instructions

### Files Created
- `server.js` - Local proxy server implementation
- `.env.example` - Example environment configuration
- `.gitignore` - File exclusion patterns

## Insecure Lines Removed
- Removed localStorage.setItem calls for API keys
- Removed sessionStorage usage for API keys
- Removed hardcoded API key strings
- Removed direct API calls with Authorization headers

## New Files Created
1. `server.js` - Express proxy server
2. `.env.example` - Environment configuration template
3. `.gitignore` - Security file exclusions

## Security Warning
**Important**: Never hardcode or store your API keys in browser or repository. Rotate keys regularly. The local proxy server keeps your API key secure on the server side, never exposing it to the client.

## Usage Instructions
1. Install dependencies: `npm install express node-fetch dotenv`
2. Create `.env` file with your `OPENROUTER_API_KEY`
3. Run local proxy: `node server.js`
4. Open `index.html` and start chatting
5. Enter API key in UI when prompted (stored only in memory)

## Verification
All security requirements have been implemented:
- ✅ No client-side key storage
- ✅ Simple key-input box in UI
- ✅ Secure local proxy server
- ✅ Updated front-end calls
- ✅ Environment and ignore files
- ✅ Researcher instructions
- ✅ Security warning included