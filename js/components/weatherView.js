export function renderWeather(weather, cityName) {
  const container = document.getElementById("weatherContainer");

  container.innerHTML = `
    <div class="weatherCard">
        <h2>${cityName}</h2>
        <p>${weather.temperature}°C</p>
        <p>${weather.description}</p>
    </div>
  `;
}
