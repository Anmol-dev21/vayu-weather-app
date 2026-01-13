# ☁️ Vayu Weather

A modern, responsive weather application built with React, Vite, and Tailwind CSS. Features a beautiful glass morphism UI with light/dark theme support.

![Vayu Weather App](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)

## ✨ Features

- 🔍 **City Search** - Search weather for any city worldwide
- 🌡️ **Real-time Weather** - Current temperature, humidity, wind speed
- 🌓 **Dark/Light Theme** - Toggle between themes with persistence
- 🎨 **Glass Morphism UI** - Modern, beautiful design
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🎯 **Default City** - Loads Indore weather on startup

## 🛠️ Tech Stack

- **React 18** - Functional components with hooks
- **Vite 5** - Next-gen frontend tooling
- **Tailwind CSS 3** - Utility-first CSS framework
- **OpenWeatherMap API** - Weather data provider

## 📁 Project Structure

```
vayu-weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # City search input
│   │   ├── WeatherCard.jsx    # Weather display card
│   │   └── ThemeToggle.jsx    # Dark/light mode toggle
│   ├── services/
│   │   └── weatherApi.js      # API calls
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & themes
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Anmol-dev21/vayu-weather-app.git
cd vayu-weather-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🎨 Color Themes

### Light Mode
- Blue gradient background (#3b82f6 → #bfdbfe)
- White glass cards
- Dark blue text

### Dark Mode
- Black to navy gradient (#000000 → #1e3a5f)
- Dark glass cards with blue accents
- White text

## 📝 API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) for weather data.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anmol** - [GitHub](https://github.com/Anmol-dev21)

---

⭐ Star this repo if you found it helpful!
