export function renderWeather(weatherData) {
    const weatherInfo = document.getElementById("weatherInfo");
    const now = new Date();
    const time = now.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit"});

    console.log(weatherData);
  weatherInfo.innerHTML = `
  <div class="card">
    <section aria-live="polite">
      <h2>${weatherData.name}</h2>
      <p>
        <span class="sr-only">Temperatur:</span>
        ${weatherData.main.temp}°C
      </p>
      <p>
        <span class="sr-only">Beskrivning:</span>
        ${weatherData.weather[0].description}
      </p>
      <p>
        <span class="sr-only">Senast uppdaterad:</span>
        Senast uppdaterad: ${time}
      </p>
    </section>
  </div>
`;

  // Ta bort "hidden"-klassen när data visas
  const card = weatherInfo.querySelector(".card");
  card.classList.remove("hidden");
}
