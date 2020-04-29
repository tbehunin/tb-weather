import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import api from '../utils/api';
import './Search.css';

function Search({ onSearchResults }) {
  const [weatherData, setWeatherData] = useState();
  const [searching, setSearching] = useState(false);
  const [debouncedCallback] = useDebouncedCallback(async (value) => {
    setSearching(true);
    const data = await (value.trim().length > 0 ? api.search(value) : Promise.resolve());
    setSearching(false);
    setWeatherData(data);
  }, 800);
  const found = (weatherData || {}).cod === 200;
  const notFound = (weatherData || {}).cod === "404";
  
  return (
    <Card body>
      <InputGroup>
        <FormControl
          placeholder="Enter a location"
          maxLength="25"
          isInvalid={notFound && !searching}
          onChange={e => debouncedCallback(e.target.value)}
        />
        {(searching || found || notFound) &&
          <InputGroup.Append>
            {searching &&
              <InputGroup.Text>
                <i className="fas fa-spinner fa-spin"></i>
                <span className="searching-text">Searching</span>
              </InputGroup.Text>
            }
            {found && !searching &&
              <Button onClick={() => onSearchResults(weatherData)}>Found:
                <span className="found-location-text">{weatherData.name}</span>
                <i className="fas fa-arrow-down"></i>
              </Button>
            }
            {notFound && !searching &&
              <InputGroup.Text className="not-found">Location not found</InputGroup.Text>
            }
          </InputGroup.Append>
        }
      </InputGroup>
    </Card>
  );
}

export default Search;
