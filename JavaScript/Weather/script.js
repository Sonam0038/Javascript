const apiKey = "";

const cityInput = document.getElementById("city-input");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const description = document.getElementById("description");
const forecastInfo = document.getElementById("forecast-info");
const forecastList = document.getElementById("forecast-list");

getWeatherBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    getWeather();
  }
});

function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please Enter city name");
    return;
  }

  fetchWeatherData(city); // argument
  // parameter and argument
}

function fetchWeatherData(city) {
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  // fetch current weather data
  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      cityName.textContent = `Weather in ${data.name}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity : ${data.main.humidity}%`;
      description.textContent = `Description : ${data.weather[0].description}`;

      // fetch 5 -day forecast data
      fetch(forecastWeatherUrl)
        .then((res) => res.json())
        .then((forecastData) => {
          displayForecast(forecastData);
        });
    })
    .catch((error) => {
      alert("Error fetching Weather data");
    });
}

function displayForecast(forecastData) {
  forecastList.innerHTML = "";

  // update in every 3 hours -> 8
  for (let i = 0; i < forecastData.list.length; i += 8) {
    const dayForecast = forecastData.list[i];

    const listItem = document.createElement("li");
    listItem.textContent = `${new Date(dayForecast.dt * 1000).toLocaleDateString()} - Temp : ${dayForecast.main.temp}°C- ${
      dayForecast.weather[0].description
    }`;
    forecastList.appendChild(listItem);
  }
}

// key and value ?https://www.youtube.com/results?search_query=codewithharry
// for(let i=0;i<=6;i+=8){

// }
// i=0
// i=2
// i=4
// i=6
