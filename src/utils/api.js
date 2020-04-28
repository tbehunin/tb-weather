export default {
  search: async (city) =>
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<YOUR_API_KEY_HERE>&units=imperial`)
      .then(response => response.json())
};
