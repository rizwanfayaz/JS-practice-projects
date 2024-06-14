const apiKey = "";  //get api key from readme.md
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wthrIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (reponse.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await reponse.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            wthrIcon.src = "/JS-practice-projects/weather-app/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            wthrIcon.src = "/JS-practice-projects/weather-app/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            wthrIcon.src = "/JS-practice-projects/weather-app/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            wthrIcon.src = "/JS-practice-projects/weather-app/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            wthrIcon.src = "/JS-practice-projects/weather-app/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
