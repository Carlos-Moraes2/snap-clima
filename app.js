


//Interração
const citySearchInput = document.getElementById('city-search-input')
const citySearchButton = document.getElementById('city-search-button')

//Exibição
const currentDate = document.getElementById("current-date");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");
const currentTemperature = document.getElementById("current-temperature");
const windSpeed = document.getElementById("wind-speed");
const fellsLikeTemperature = document.getElementById("fells-like-temperature");
const currentHumidity = document.getElementById("current-humidity");
const sunriseTime =document.getElementById("sunrise-time");
const sunsetTime = document.getElementById("sunset-time");

const api_key = "8315b819e6f4870f8a2a5c1103cbd8bd";
                                            //Função anônima
citySearchButton.addEventListener("click", () =>{
    let cityName = citySearchInput.value
    getCityWeather(cityName)
})

function getCityWeather(cityName) {
    console.log(cityName)
}

// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${api_key}

function getCityWeather(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`)
     .then((response) => response.json())
     .then((data) => displayWeather(data))
} 

function displayWeather(data) {
  let {
    dt,
    name,
    weather: [{icon, description }],
    main: { temp, feels_like, humidity },
    wind: {speed },
    sys: { sunrise, sunset },
  } =data

currentDate.textContent = dt
cityName.textContent = name
weatherIcon.src = `/assets/${icon}.svg`
weatherDescription.textContent = description;
currentTemperature.textContent = temp;
windSpeed.textContent= speed;
fellsLikeTemperature.textContent = feels_like;
currentHumidity.textContent = humidity;
sunriseTime.textContent = sunrise;
sunsetTime.textContent = sunset;
}