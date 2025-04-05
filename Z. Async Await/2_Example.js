/**
 * Async/Await Example 2
 * 
 * This example demonstrates fetching weather data using async/await.
 * We use a free weather API to get current weather information.
 * 
 * The async/await pattern makes asynchronous code look and behave more like synchronous code,
 * which improves readability and error handling.
 */

async function fetchWeather(city) {
  // Fetch weather for a specific city using a free API
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=DEMO_KEY&q=${city}`);
  const data = await response.json();
  return data;
}

// Using the async function
async function main() {
  console.log('Fetching weather data...');
  try {
    const weatherData = await fetchWeather('London');
    console.log(`Location: ${weatherData.location.name}, ${weatherData.location.country}`);
    console.log(`Current temperature: ${weatherData.current.temp_c}°C`);
    console.log(`Condition: ${weatherData.current.condition.text}`);
  } catch (error) {
    console.error('Failed to fetch weather data:', error.message);
  }
}

main();
