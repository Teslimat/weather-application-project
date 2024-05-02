function refreshWeather(response){
    let cityElement = document.querySelector("#weather-app-city");
    let temperatureElement = document.querySelector("#weather-app-temp");
    let temperature = response.data.temperature.current;
    let descriptionElement = document.querySelector("#weather-description");
    let humidityElement = document.querySelector("#weather-humidity");
    let windElement = document.querySelector("#weather-wind-speed");
    let timeElement = document.querySelector("#weather-time");
    let date = new Date(response.data.time *1000)

    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature)
    descriptionElement.innerHTML = response.data.condition.description
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`
    windElement.innerHTML = `${response.data.wind.speed}Km/h`
    timeElement.innerHTML = formatDate(date)
  
}

function formatDate(date){
    
    let minutes = date.getMinutes()
    let hours = date.getHours()

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];

    if (minutes < 10){
        minutes = `0${minutes}`
    }

      if (hours < 10) {
        hours = `0${hours}`;
      }

    return `${day} ${hours}:${minutes}`
}

function searchCity(city){
    let apiKey = "92dd828taa17b53d1feo43a40bd1ab2f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather)
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


searchCity("Paris")