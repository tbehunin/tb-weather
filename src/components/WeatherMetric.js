import React from 'react';

function WeatherMetric({ label, value }) {
  return (
    <div>
      <div>{label}</div>
      <h3>{value}</h3>
    </div>
  );
}

export default WeatherMetric;
