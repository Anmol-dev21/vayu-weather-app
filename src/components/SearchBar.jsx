/**
 * SearchBar Component
 * Enhanced search input with modern styling
 */

function SearchBar({ onSearch }) {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    if (city) {
      onSearch(city);
      e.target.city.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mb-8">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <span className="absolute left-4 z-10 pointer-events-none">
          <svg 
            className="w-5 h-5 opacity-50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </span>

        {/* Input Field */}
        <input
          type="text"
          name="city"
          placeholder="Search for a city..."
          className="search-input w-full h-14 pl-12 pr-44 bg-white/20 dark:bg-white/10 rounded-2xl placeholder-current placeholder-opacity-40 border border-white/25 dark:border-white/15 focus:outline-none focus:border-white/50 text-base font-medium transition-all"
          autoComplete="off"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="search-btn absolute right-2 h-10 px-5 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all"
        >
          Search
        </button>
      </div>
      
      {/* Hint text */}
      <p className="text-center text-xs mt-3 opacity-40">
        Try: London, Tokyo, New York, Paris
      </p>
    </form>
  );
}

export default SearchBar;
