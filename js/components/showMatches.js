export function showMatches(results) {
  const container = document.getElementById("searchMatch");
  container.innerHTML = "";

  const ul = document.createElement("ul");

  results.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name}, ${item.country}`;
    li.dataset.lat = item.latitude;
    li.dataset.lon = item.longitude;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}
