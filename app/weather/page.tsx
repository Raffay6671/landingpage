"use client";

import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "@/lib/api";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather("London");
        setWeatherData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-white mt-10">Loading weather data...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!weatherData || !weatherData.location || !weatherData.current) {
    return (
      <p className="text-center text-white mt-10">No weather data available.</p>
    );
  }

  const { location, current } = weatherData;

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Live Weather for {location.name}
      </h1>
      <div className="max-w-lg mx-auto bg-[#1a1a1a] shadow-md rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-2">
          {location.name}, {location.region}, {location.country}
        </h2>
        <p className="text-lg">Local Time: {location.localtime}</p>

        <div className="mt-4">
          <p className="text-lg font-medium">
            Temperature: {current.temp_c}°C / {current.temp_f}°F
          </p>
          <p className="text-lg">Condition: {current.condition.text}</p>
          <img
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            className="w-16 h-16 mt-2"
          />
        </div>

        <div className="mt-6">
          <p>
            <strong>Feels Like:</strong> {current.feelslike_c}°C /{" "}
            {current.feelslike_f}°F
          </p>
          <p>
            <strong>Wind:</strong> {current.wind_kph} kph ({current.wind_dir})
          </p>
          <p>
            <strong>Pressure:</strong> {current.pressure_mb} mb
          </p>
          <p>
            <strong>Humidity:</strong> {current.humidity}%
          </p>
          <p>
            <strong>Visibility:</strong> {current.vis_km} km /{" "}
            {current.vis_miles} miles
          </p>
          <p>
            <strong>UV Index:</strong> {current.uv}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-400">
            Last Updated: {current.last_updated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
