import {getWeather} from "./data.js";
import {renderWeather} from "./ui.js";

const cityInput = document.getElementById("input");
const searchBtn = document.getElementById("inputBtn");
let currentCity = "";


searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    const formattedCity = city[0].toUpperCase() + city.slice(1).toLowerCase();
    currentCity = formattedCity;

    const data = await getWeather(formattedCity);
    renderWeather(data);
});


cityInput.addEventListener("change", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    const formattedCity = city[0].toUpperCase() + city.slice(1).toLowerCase();
    currentCity = formattedCity;
    const data = await getWeather(formattedCity);
    renderWeather(data);
});

setInterval(async () => {
    if (currentCity) {
        const data = await getWeather(currentCity);
        renderWeather(data);
        console.log("Automatisk uppdatering för: ", currentCity);
    }
    }, 600000); //(millisekunder) = 10min

