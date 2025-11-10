export function renderWeather(weatherData) {
    const weatherInfo = document.getElementById("weatherInfo");
    const now = new Date();
    const time = now.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit"});

    console.log(weatherData);
  weatherInfo.innerHTML = `
    <div class="card hidden">
      <section aria-live="polite">
        <h2>${weatherData.name}</h2>
        <p>${weatherData.main.temp} °C</p>
        <p>${weatherData.weather[0].description}</p>
        <p>Uppdaterad: ${time}</p>
      </section>
    </div>
`;
  // Ta bort "hidden"-klassen när data visas
  const card = weatherInfo.querySelector(".card");
  card.classList.remove("hidden");
}
