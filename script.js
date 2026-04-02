document.addEventListener('DOMContentLoaded', () => {
   const cityInput = document.getElementById("city-input");
   const getWeatherButton = document.getElementById("get-weather-btn");
   const weatherInfo = document.getElementById("weather-info");
   const cityNameDisplay = document.getElementById("city-name");
   const temperatureDisplay = document.getElementById("temperature");
   const descriptionDisplay = document.getElementById("description");
   const humidityDisplay = document.getElementById("humidity");
   const errorMessage = document.getElementById("error-message");

   const API_KEY = "df94b87d7caa3b8df750a5f009a1c91d"; 

   getWeatherButton.addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if(!city) 
         return;
      try {
         const data = await fetchWeatherData(city);
         displayWeatherData(data);
      } catch (error) {
         showError();
      }
   })

   async function fetchWeatherData(city)
   {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      
      const response = await fetch(url); 
      console.log(typeof response);
      console.log(response);
      if(!response.ok)
         throw new Error("city not found");
      const data = await response.json();
      return data;
   }
   function displayWeatherData(data)
   {
      console.log(data);
      
      const {name, main, weather} = data;
      cityNameDisplay.textContent = name;
      temperatureDisplay.textContent = `Temperatue : ${main.temp}`;
      descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
      humidityDisplay.textContent = `Humidity : ${main.humidity}`;

      weatherInfo.classList.remove("hidden");

      setTimeout(() => {
         weatherInfo.classList.remove("opacity-0");
         weatherInfo.classList.add("opacity-100");
      }, 50);

      errorMessage.classList.add("hidden");
   }
   function showError()
   {
      weatherInfo.classList.add("hidden");
      weatherInfo.classList.add("opacity-0");
      errorMessage.classList.remove("hidden");
   }
});