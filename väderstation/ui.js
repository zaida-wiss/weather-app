export function renderWeather(weatherData) {
    const weatherInfo = document.getElementById("weatherInfo");
    const now = new Date();
    const time = now.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit"});

    console.log(weatherData);
weatherInfo.innerHTML =
`
<section aria-live="polite">
<h2>${weatherData.name}</h2>
<p>${weatherData.main.temp}</p>
<p>${weatherData.weather[0].description}</p>
<p>Uppdaterad: ${time}</p>
</section>
`
}