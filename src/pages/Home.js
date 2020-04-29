import React, { useState, Fragment } from 'react';
import { Row } from 'react-bootstrap';
import Search from '../components/Search';
import WeatherData from '../components/WeatherData';
import './Home.css';

function Home() {
  const [weatherData, setWeatherData] = useState();
  console.log('Home', weatherData);
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Search onSearchResults={data => setWeatherData(data)} />
      </Row>
      <Row className="justify-content-center">
        <WeatherData data={weatherData} />
      </Row>
    </Fragment>
  );
}

export default Home;
