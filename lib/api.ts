const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Use your environment variable

// Function to fetch current weather
export const fetchCurrentWeather = async (location: string) => {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw to handle in the component
  }
};
