function refreshWeather(response){
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = response.data.city

    let temperatureElement = document.querySelector("#weather-app-temp");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature)

    console.log(response.data.temperature.current)
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