/**
 * Weather API Service
 * Handles all API calls to OpenWeatherMap
 */

// API Configuration
const API_KEY = '61ea80609214610e5d99f74487776b57'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches current weather data for a city
 * @param {string} city - City name to search
 * @returns {Promise<Object>} Formatted weather data
 */
export async function getWeather(city) {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  
  const response = await fetch(url);
  
  // Handle errors
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Please check the spelling.');
    }
    if (response.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.');
    }
    throw new Error('Failed to fetch weather data. Please try again.');
  }
  
  const data = await response.json();
  
  // Return formatted data
  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  };
}
