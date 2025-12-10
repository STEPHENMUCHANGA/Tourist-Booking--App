import React, { useState, useEffect } from 'react';

function Weather({ location }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
      const data = await res.json();
      setWeather(data);
    };
    fetchWeather();
  }, [location]);

  if (!weather) return <p>Loading weather...</p>;
  if (weather.cod !== 200) return <p>Weather data not available</p>;

  return (
    <div>
      <h4>Weather in {weather.name}</h4>
      <p>{weather.weather[0].description}, {weather.main.temp}°C</p>
    </div>
  );
}

export default Weather;
