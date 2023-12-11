
let target = 'Toronto';

const fetchResults = async (targetLocation) => {
let url = `http://api.weatherapi.com/v1/current.json?key=805793d9ce5344dfbf221332231012&q=${targetLocation}&aqi=no`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        let locationName = data.location.name;
        let temp = data.current.temp_c; // Temperature in Celsius
        let condition = data.current.condition.text; // Weather condition description

        // Update the DOM with the new data
        document.querySelector('.location').textContent = `Location: ${locationName}`;
        document.querySelector('.temp').textContent = `Temperature: ${temp}°C`;
        document.querySelector('.condition').textContent = `Condition: ${condition}`;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

// Call the function on window load
window.onload = () => fetchResults(target);
