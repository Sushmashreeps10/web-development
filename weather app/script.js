const apikey = "13d8a02fdc231983f676c405da84ed7e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather img");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search button");
    if (searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            checkWeather(searchBox.value);
        });
    } else {
        console.error("Search button not found");
    }
});


    
if (searchBtn) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather(searchBox.value);
  });
} else {
  console.error("Search button not found");
}


async function checkWeather(city) {
  try {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    if (response.status === 404) {
      console.error("City not found");
    } else {
      const data = await response.json();
      if (cityElement) {
        cityElement.innerHTML = data.name;
      }
      if (tempElement) {
        tempElement.innerHTML = data.main.temp + "°c";
      }
      if (humidityElement) {
        humidityElement.innerHTML = data.main.humidity + "%";
      }
      if (windElement) {
        windElement.innerHTML = data.wind.speed + "km/h";
      }
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
      }
    }
  } catch (error) {
    console.error(error);
  }
}
