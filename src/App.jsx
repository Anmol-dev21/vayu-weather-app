import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ThemeToggle from './components/ThemeToggle';
import { getWeather } from './services/weatherApi';

// Default city to load on first visit
const DEFAULT_CITY = 'Indore';

function App() {
  // State for weather data, loading, error, and theme
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Toggle theme
  const toggleTheme = () => setIsDark(!isDark);

  // Fetch weather for a city
  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Load default city weather on first render
  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, []);

  // Handle search from SearchBar
  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 flex flex-col">
      <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">
        {/* Header with Theme Toggle */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="header-icon w-11 h-11 bg-white/20 dark:bg-white/10 rounded-xl flex items-center justify-center border border-white/30 dark:border-white/15 shadow-lg">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Vayu Weather</h1>
          </div>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </header>

        {/* Search Bar - Compact */}
        <SearchBar onSearch={handleSearch} />

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center py-4">
          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center">
              <div className="spinner mb-4"></div>
              <p className="loading-pulse text-sm opacity-60">Fetching weather...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="glass-card rounded-3xl p-8 text-center fade-in error-card w-full max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-red-400/30">
                <svg 
                  className="w-8 h-8 text-red-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Something went wrong</h3>
              <p className="opacity-60 mb-5 text-sm">{error}</p>
              <button
                onClick={() => fetchWeather(DEFAULT_CITY)}
                className="btn-primary px-6 py-2.5 rounded-xl font-medium text-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
            </div>
          )}

          {/* Weather Display */}
          {weather && !loading && !error && (
            <WeatherCard weather={weather} />
          )}
        </main>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <p className="text-xs opacity-30">
            Powered by OpenWeatherMap
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
