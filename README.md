# BrutalGPT - Next-Gen Uncensored AI Chatbot

A next-gen uncensored AI chatbot for cybersecurity and coding. Built for unrestricted conversations, raw code generation, and advanced security research. Ideal for experts who need full control, freedom, and power beyond standard AI limits.

![BrutalGPT Demo](images/brutalgpt.png)

## Features

- 🛡️ **Cybersecurity Focus**: Designed specifically for security research and analysis
- 💻 **Raw Code Generation**: Generate unrestricted code for various programming languages
- 🔓 **Uncensored Conversations**: Engage in unrestricted dialogue without standard AI limitations
- 🧠 **Advanced Security Research**: Tools and capabilities for expert-level security analysis
- 🎯 **Expert Control**: Full control and freedom for advanced users
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 💬 **Chat History**: Save and load previous conversations
- 📁 **File Attachments**: Support for image and document uploads
- 🎨 **Responsive Design**: Works on mobile, tablet, and desktop
- 🧪 **Simulated AI Responses**: Intelligent simulated responses when API key is not provided
- 🔧 **Code Mode**: Specialized mode for Python code generation with syntax highlighting
- 🎯 **Sidebar Navigation**: Collapsible sidebar for better screen utilization
- 📋 **Message Actions**: Copy, regenerate, and manage messages
- 🔐 **API Integration**: Connect to OpenRouter API for real AI responses

## Demo

![BrutalGPT Screenshot](images/demo.png)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: OpenRouter API key for real AI responses

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/brutalgpt.git
   ```

2. Navigate to the project directory:
   ```bash
   cd brutalgpt
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## Usage

1. **First-time Setup**:
   - Enter your name in the onboarding screen
   - Optionally add your OpenRouter API key for real AI responses
   - Click "Start Chatting"

2. **Chatting**:
   - Type your message in the input field at the bottom
   - Press Enter or click the send button to submit
   - Toggle between chat mode and code mode using the code icon in the header

3. **File Attachments**:
   - Click the paperclip icon to attach files
   - Select image or document files to upload
   - Attached files will be shown in the chat

4. **Managing Chats**:
   - Create new chats with the "New chat" button
   - View chat history in the sidebar
   - Rename or delete chats using the action buttons
   - Toggle sidebar collapse using the menu icon

5. **Theme Switching**:
   - Switch between dark and light mode in your profile settings
   - Use Ctrl+D as a keyboard shortcut

## API Integration

To use real AI responses instead of simulated ones:

1. Get an API key from [OpenRouter](https://openrouter.ai/)
2. Add your API key in the profile settings
3. Select a model (default is `cognitivecomputations/dolphin-mistral-24b-venice-edition:free`)

Note: Due to browser security restrictions (CORS), the API may not work directly in all browsers. Error messages will be shown in the browser console.

## Project Structure

```
.
├── index.html          # Main HTML file
├── css/
│   ├── root-c1znbk8k.css     # Core styles
│   └── conversation-small-chy8jwv7.css  # Conversation styles
├── images/
│   ├── favicon-eex17e9e.ico
│   ├── favicon-l4nq08hd.svg
│   ├── favicon-180x180-od45eci6.webp
│   └── brutalgpt.png
└── README.md           # This file
```

## Key Components

### User Interface
- **Sidebar**: Contains chat history and user profile
- **Main Chat Area**: Displays conversation between user and AI
- **Composer**: Input area for typing messages and attaching files
- **Welcome Screen**: Initial screen with suggestions for new users

### Core Functionality
- **Message Management**: Send, receive, and store chat messages
- **Chat History**: Local storage of conversations
- **Theme Management**: Dark/light mode switching
- **File Handling**: Image and document attachment support
- **API Integration**: OpenRouter API connectivity

### Special Features
- **Code Mode**: Dedicated mode for Python code generation with syntax highlighting
- **Simulated Responses**: Intelligent AI-like responses when API is not available
- **Responsive Design**: Adapts to different screen sizes
- **Keyboard Shortcuts**: Ctrl+D for theme toggle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

This project is built with vanilla HTML, CSS, and JavaScript with no build step required. All functionality is contained within a single HTML file with embedded CSS and JavaScript.

To modify the project:
1. Edit `index.html` to change the UI or functionality
2. Modify the CSS styles within the `<style>` tags
3. Update JavaScript functions as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by OpenAI's ChatGPT interface
- Uses OpenRouter API for AI capabilities
- Icons from various open-source libraries

## Author
Jatin - Python & frontend Developer

GitHub: @jagbiryadav
LinkedIn: @jagbir-yadav


## Disclaimer

This is a frontend clone project for educational purposes. It is not affiliated with OpenAI or ChatGPT. The simulated AI responses are generated locally and are not powered by any real AI model unless an API key is provided. This tool is designed for cybersecurity and coding professionals who require unrestricted capabilities for legitimate research and development purposes.

