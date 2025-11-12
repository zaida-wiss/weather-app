// 1️⃣ KLASS FÖR ATT SKAPA VÄDERKORT
export class WeatherCard {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }

  render() {
    const now = new Date();
    const time = now.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <section aria-live="polite">
        <h2>${this.weatherData.name}</h2>
        <p>
          <span class="sr-only">Temperatur:</span>
          ${this.weatherData.main.temp}°C
        </p>
        <p>
          <span class="sr-only">Beskrivning:</span>
          ${this.weatherData.weather[0].description}
        </p>
        <p>
          <span class="sr-only">Senast uppdaterad:</span>
          Senast uppdaterad: ${time}
        </p>
      </section>
    `;

    return card;
  }
}

// 2️⃣ FUNKTION FÖR ATT VISA KORT PÅ SIDAN
export function renderWeather(weatherData) {
  const weatherInfo = document.getElementById("weatherInfo");

  // Kontrollera om samma stad redan finns — ta bort dubblett
  const existingCard = weatherInfo.querySelector(`[data-city="${weatherData.name}"]`);
  if (existingCard) existingCard.remove();

  // Skapa nytt kort
  const card = new WeatherCard(weatherData).render();
  card.dataset.city = weatherData.name;

  weatherInfo.prepend(card);
}
