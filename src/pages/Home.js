import React, { useState } from 'react';
import Search from '../components/Search';
import WeatherData from '../components/WeatherData';

function Home() {
  const [weatherData, setWeatherData] = useState();
  console.log('Home', weatherData);
  return (
    <div>
      <Search onSearchResults={data => setWeatherData(data)} />
      <WeatherData data={weatherData} />
    </div>
  );
}

export default Home;
