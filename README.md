# Trailer Park Boys Episode Randomizer - React Edition

A modern React-based version of the Trailer Park Boys Episode Randomizer, built with Vite, React 18, and Express.

## Features

- 🚀 Fast development with Vite
- ⚛️ React 18 for modern UI
- 🎬 Random episode selector with special weighting for seasons 7 & 8
- 📱 Fully responsive design
- 🔧 Express backend for serving the app

## Project Structure

```
tpbrandomizer-react/
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Main App component
│   ├── App.css           # App styles
│   └── index.css         # Global styles
├── public/               # Static assets (images, etc.)
├── index.html            # HTML template
├── server.js             # Express server
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the Vite dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

### Start Production Server

```bash
npm start
```

Or for development with the Express server:

```bash
npm run server
```

## Dependencies

- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - React rendering
- **express** (^4.19.2) - Backend server
- **cors** (^2.8.5) - Cross-origin resource sharing

### Dev Dependencies

- **vite** (^5.1.3) - Build tool
- **@vitejs/plugin-react** - React support for Vite
- **eslint** - Code linting
- Various ESLint plugins for code quality

## How It Works

1. Click the **"GET GREASY"** button to get a random episode
2. The app randomly selects a season (1-12) and an appropriate episode number for that season
3. Seasons 7 and 8 have special weighting for bonus content episodes
4. Background images change based on season selection

## Version

v1.0.0

## License

ISC

## Original Repository

https://github.com/luntzel/tpbrandomizer
