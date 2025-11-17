let map;
let marker;

export function showMap(lat, lon, city) {
  if (!map) {
    map = L.map("map").setView([lat, lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);
  }

  if (marker) {
    marker.remove();
  }

  marker = L.marker([lat, lon]).addTo(map).bindPopup(city).openPopup();

  map.setView([lat, lon], 10);
}
