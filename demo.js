async function getWeather() {
    const city = document.getElementById('cityInput').value; // Get user input
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7b1a2341c5mshcb628c51000805ap18b3c8jsn3794d531e8e3',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function redirectToWeatherPage() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        window.location.href = `weather.html?city=${encodeURIComponent(city)}`;
    } else {
        alert('Please enter a city name');
    }
}