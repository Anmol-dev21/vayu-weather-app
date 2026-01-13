# Vayu Weather

A simple, modern React weather application built with Vite and Tailwind CSS.

## Features

- 🔍 Search weather by city name
- 🌡️ Display temperature in Celsius
- 💨 Show humidity and wind speed
- 🎨 Clean, modern UI with glass morphism
- 📱 Fully responsive design
- ⚡ Fast loading with Vite

## Project Structure

```
vayu-weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 3. Build for Production

```bash
npm run build
```

## Deployment

### Netlify / Vercel

1. Push to GitHub
2. Connect repo
3. Build command: `npm run build`
4. Publish directory: `dist`

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- OpenWeatherMap API

## License

MIT
