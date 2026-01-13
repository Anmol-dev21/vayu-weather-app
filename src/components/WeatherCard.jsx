/**
 * WeatherCard Component
 * Compact layout - all info visible without scrolling
 */

function WeatherCard({ weather }) {
  // Get current date - shorter format
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in w-full">
      {/* Top Row: Location + Date - Centered */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="location-badge inline-flex items-center gap-2 px-4 py-2">
          <svg 
            className="w-4 h-4 text-current opacity-70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          <span className="font-semibold text-sm">
            {weather.city}, {weather.country}
          </span>
          <span className="text-current opacity-40">•</span>
          <span className="text-current opacity-60 text-xs">{dateString}</span>
        </div>
      </div>

      {/* Main Weather: Icon + Temp + Condition - Centered */}
      <div className="flex flex-col items-center text-center mb-6">
        {/* Weather Icon */}
        <div className="relative">
          <img
            src={weather.iconUrl}
            alt={weather.description}
            className="w-28 h-28 sm:w-32 sm:h-32 weather-icon"
          />
        </div>

        {/* Temperature */}
        <p className="text-7xl sm:text-8xl font-bold temperature tracking-tight leading-none mt-2">
          {weather.temperature}°
        </p>
        
        {/* Condition */}
        <p className="text-lg font-medium capitalize mt-2 opacity-90">
          {weather.description}
        </p>
        <p className="text-sm opacity-60 mt-1">
          Feels like {weather.feelsLike}°C
        </p>
      </div>

      {/* Weather Details - Centered Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {/* Humidity */}
        <div className="detail-card py-4 px-3 text-center">
          <div className="icon-container w-10 h-10 bg-blue-500/20 dark:bg-blue-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <svg className="w-5 h-5 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Humidity</p>
          <p className="font-bold text-xl">{weather.humidity}<span className="text-sm font-medium">%</span></p>
        </div>

        {/* Wind Speed */}
        <div className="detail-card py-4 px-3 text-center">
          <div className="icon-container w-10 h-10 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Wind</p>
          <p className="font-bold text-xl">{weather.windSpeed}<span className="text-sm font-medium ml-0.5">km/h</span></p>
        </div>

        {/* Pressure */}
        <div className="detail-card py-4 px-3 text-center">
          <div className="icon-container w-10 h-10 bg-purple-500/20 dark:bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <svg className="w-5 h-5 text-purple-500 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Feels</p>
          <p className="font-bold text-xl">{weather.feelsLike}<span className="text-sm font-medium">°</span></p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
