function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export async function getGeo(city) {
  const url =
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`;

  const res = await fetch(url);
  if (!res.ok) return [];

  const data = await res.json();
  if (!data.results) return [];

  const allowed = ["PPLC", "PPLA", "PPLA2", "PPL", "ISL"];

  const filtered = data.results.filter(r => allowed.includes(r.feature_code));

  const normalizedCity = normalize(city);

  // exakt matchning
  const strict = filtered.filter(item =>
    normalize(item.name) === normalizedCity
  );

  // TA BORT DUBLETTER (unika lat+lon)
  const seen = new Set();
  const unique = [];

  for (const item of strict) {
    const key = `${item.latitude},${item.longitude}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push({
        name: item.name,
        country: item.country,
        latitude: item.latitude,
        longitude: item.longitude
      });
    }
  }

  return unique;
}
