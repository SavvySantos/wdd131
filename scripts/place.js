var date = new Date ();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;
var date = document.lastModified;
document.getElementById("lastmodified").innerHTML = date;

const apiKey = "c93a13b5523e51a7d6d34fc3797c35d7";
const city = "Edingurgh";
    async function getWeather()
    {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=edinburgh&appid=c93a13b5523e51a7d6d34fc3797c35d7&units=imperial';

        const response = await fetch(url);
        const data = await response.json();

        let temperature = data.main.temp;
        let condition = data.weather[0].description;
        let windSpeed = data.wind.speed;

        document.getElementById("temperature").textContent = data.main.temp.toFixed(1);
        document.getElementById("condition").textContent = data.weather[0].description;
        document.getElementById("wind").textContent = data.wind.speed;


        let windChill = (temperature <= 50 && windSpeed > 3)
            ? (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1)
            : "N/A";            
        document.getElementById("wind-chill").textContent = windChill;
        }
        getWeather("Edinburgh");
        setInterval(getWeather("Edinburgh"), 600000);
