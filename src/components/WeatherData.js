import React from 'react';
import { Card } from 'react-bootstrap';
import WeatherMetric from './WeatherMetric';
import './WeatherData.css';

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
    } = {},
    sys: {
      sunrise,
      sunset,
    } = {},
    wind: {
      speed,
    } = {},
    visibility,
  } = data;
  const { main, description, icon } = weatherItem;

  console.log('WeatherData', data);
  const deg = String.fromCharCode(8457);
  const metricData = [
    { label: 'Hi/Lo', value: `${Math.round(temp_max)}${deg}/${Math.round(temp_min)}${deg}` },
    { label: 'Feels Like', value: `${Math.round(feels_like)}${deg}` },
    { label: 'Pressure', value: pressure },
    { label: 'Humidity', value: `${humidity}% hPa` },
    { label: 'Sunrise', value: new Date(sunrise * 1000).toLocaleTimeString() },
    { label: 'Sunset', value: new Date(sunset * 1000).toLocaleTimeString() },
    { label: 'Wind Speed', value: `${speed} MPH` },
    { label: 'Visibility', value: `${visibility} m` },

  ];
  return (
    <Card body className="text-center">
      <h1>{name}</h1>
      <h2>{Math.round(temp)}{deg}</h2>
      <div>{main}</div>
      <div><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} title={description} /></div>
      <ul className="metric-list">
        {metricData.map(item => (
          <li key={item.label}>
            <WeatherMetric { ...item } />
          </li>))}
      </ul>
    </Card>
  );
}

export default WeatherData;
