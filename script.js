async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "a352c35f9f6e40a04fe28a19aab5c39b"; // Replace with your own key
    const resultDiv = document.getElementById("result");
  
    if (!city) {
      resultDiv.innerHTML = "<p style='color:#ff6b6b;'>Enter a city name.</p>";
      return;
    }
  
    resultDiv.innerHTML = "<p>Fetching data...</p>";
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡 Temp:</strong> ${data.main.temp}°C</p>
        <p><strong>☁️ Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>🌬 Wind:</strong> ${data.wind.speed} m/s</p>
      `;
      resultDiv.innerHTML = html;
    } catch (err) {
      resultDiv.innerHTML = `<p style="color:#ff6b6b;">${err.message}</p>`;
    }
  }
  