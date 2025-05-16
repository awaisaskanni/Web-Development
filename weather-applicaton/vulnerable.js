const apikey = "8a9f7f7f69dc3b1616d1d873039872fd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    // Injecting user input directly into the page (vulnerable to XSS)
    document.querySelector(".city").innerHTML = city;

    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await response.json();

        if (data.cod === 200) {
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
        } else {
            document.querySelector(".temp").innerHTML = "N/A";
            document.querySelector(".humidity").innerHTML = "N/A";
            document.querySelector(".Wind").innerHTML = "N/A";
        }
    } catch (err) {
        console.log("Error fetching weather:", err);
        document.querySelector(".temp").innerHTML = "Error";
        document.querySelector(".humidity").innerHTML = "Error";
        document.querySelector(".Wind").innerHTML = "Error";
    }
}

// User input triggers function (also vulnerable when `city` is passed)
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
