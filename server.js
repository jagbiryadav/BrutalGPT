require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Warn if API key is missing
if (!OPENROUTER_API_KEY) {
    console.warn('WARNING: OPENROUTER_API_KEY not found in .env file. API requests will fail.');
}

// Proxy endpoint for OpenRouter API
app.post('/api/openrouter/chat', async (req, res) => {
    try {
        // Check if API key is configured
        if (!OPENROUTER_API_KEY) {
            return res.status(500).json({
                error: 'Server configuration error: OPENROUTER_API_KEY not set in .env file'
            });
        }

        // Forward the request to OpenRouter API
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': req.get('origin') || `http://localhost:${PORT}`,
                'X-Title': 'BrutalGPT',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        // Get response data
        const data = await response.json();

        // Forward the response back to the client
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({
            error: 'Proxy error: ' + error.message
        });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`BrutalGPT Local Proxy Server running on http://localhost:${PORT}`);
    console.log(`OpenRouter API Key configured: ${!!OPENROUTER_API_KEY ? 'Yes' : 'No'}`);
});