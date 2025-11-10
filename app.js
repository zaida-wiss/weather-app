const CITIES = {
	"Stockholm": { country: "SE", lat: 59.3293, lon: 18.0686 },
	"Göteborg": { country: "SE", lat: 57.7089, lon: 11.9746 },
	"Malmö": { country: "SE", lat: 55.6050, lon: 13.0038 },
	"Uppsala": { country: "SE", lat: 59.8586, lon: 17.6389 },
	"Lund": { country: "SE", lat: 55.7047, lon: 13.1910 }
};

const WEATHER = {
	"59.3293,18.0686": { temp: 7, description: "Mulet", icon: "", updatedAt: "2025-11-02T09:00:00Z" },
	"57.7089,11.9746": { temp: 8, description: "Lätt regn", icon: "", updatedAt: "2025-11-02T09:00:00Z" },
	"55.6050,13.0038": { temp: 9, description: "Klart", icon: "", updatedAt: "2025-11-02T09:00:00Z" },
	"59.8586,17.6389": { temp: 6, description: "Dis", icon: "", updatedAt: "2025-11-02T09:00:00Z" },
	"55.7047,13.1910": { temp: 8, description: "Halvklart", icon: "", updatedAt: "2025-11-02T09:00:00Z" }
};

function initialize() {
	console.log("Page loaded and script initialized.");

	const cityInput = document.getElementById("cityInput");
	const searchBtn = document.getElementById("searchBtn");

	searchBtn.addEventListener("click", () => {
		console.log("Search button clicked for city: " + cityInput.value);
		updateWeatherDisplay(cityInput.value);
	});
}

function updateWeatherDisplay(city) {
	return new Promise((resolve, reject) => {
		getCityCoordinates(city)
			.then((coordinates) => {
				console.log("Coordinates for " + city + ": " + coordinates.lat + ", " + coordinates.lon);
				return getWeatherFromCoordinate(coordinates.lat, coordinates.lon);
			})
			.then((weather) => {
				console.log("Weather data received: ", weather);

				document.getElementById("cityName").innerText = city;
				document.getElementById("temperature").innerText = weather.temp + "°C";
				document.getElementById("description").innerText = weather.description;
				document.getElementById("updatedTime").innerText =
					"Uppdaterad: " + new Date(weather.updatedAt).toLocaleTimeString();

				document.getElementById("weatherResult").classList.remove("hidden");
				resolve();
			})
			.catch((error) => {
				document.getElementById("cityName").innerText = "Fel";
				document.getElementById("description").innerText = error.message;
				document.getElementById("weatherResult").classList.remove("hidden");
				reject(error);
			});
	});
}

function getWeatherFromCoordinate(lat, lon) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let key = lat.toFixed(4) + "," + lon.toFixed(4);
			let city = WEATHER[key];
			if (city) {
				resolve(city);
			} else {
				reject(new Error("Väderdata saknas för dessa koordinater"));
			}
		}, 1000);
	});
}

function getCityCoordinates(cityName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (CITIES[cityName]) {
				resolve({ lon: CITIES[cityName].lon, lat: CITIES[cityName].lat });
			} else {
				reject(new Error("Staden hittades inte"));
			}
		}, 1000);
	});
}

window.addEventListener("DOMContentLoaded", initialize);