import React from 'react';

function WeatherData({data}) {

  if (!data) {
    return null;
  }

  const {
    weather: [weatherItem],
    name,
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
    }
  } = data;
  const { main, description, icon } = weatherItem;

  console.log('WeatherData', data);
  return (
    <div>
      <div>{name}</div>
      <div>{main}</div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} title={description} />
      <div>{Math.round(temp)}&#8457;</div>
      <div>{Math.round(temp_max)}&#8457;/{Math.round(temp_min)}&#8457;</div>
    </div>
  );
}

export default WeatherData;
