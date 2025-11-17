    export async function getWeather(city) {
      console.log(city);
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sv&appid=d6f3a1a45529ce0b80572cc15116ba25
`);
console.log("Svar:", response.status);
  const data= await response.json();
  return data;
    }
    