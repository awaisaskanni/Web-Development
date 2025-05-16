const apikey = "8a9f7f7f69dc3b1616d1d873039872fd"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    var response = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await response.json()
    console.log(data)


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".city").innerHTML = data.name;

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Cloud") {
        weatherIcon.src = "images/clouds.png"
    }

    else if (data.weather[0].main == "Dizzle") {
        weatherIcon.src = "images/dizzle.png"
    }

    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }

    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }

}


    // input
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })
