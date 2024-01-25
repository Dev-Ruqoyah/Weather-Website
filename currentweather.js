var hourscontent = document.querySelector('.hours');
var minutescontent = document.querySelector('.minutes');
var secondscontent = document.querySelector('.seconds');
var temperature = document.querySelector('.temp')
var visibility = document.querySelector('.visi')
var pressure = document.querySelector('.pres')
var humidity = document.querySelector('.humi')
var windeg = document.querySelector('.windeg')
var windgust = document.querySelector('.windgust')
var windspeed = document.querySelector('.windspeed')
var country = document.getElementById('country')
var countrycontent = document.querySelector('.country')


const date = new Date();
var hour = date.getHours();
var second = date.getSeconds();
var minutes = date.getMinutes();

hourscontent.innerHTML = `${hour-12}:`
minutescontent.innerHTML = `${minutes}:`
secondscontent.innerHTML = `${second}`


function getWeather(apiKey,country){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response=>(response.json()))
    .then(data =>{
        console.log(data);
        var temperatureConversion = data.main.temp;
        temperature.innerHTML = `${Math.floor(temperatureConversion-273)}°C`

        var visibilityConversion = data.visibility;
        visibility.innerHTML = `${visibilityConversion}km`

        var pressureConversion = data.main.pressure;
        pressure.innerHTML = `${pressureConversion}mb`

        var humidityConversion = data.main.humidity;
        humidity.innerHTML = `${humidityConversion}%`

        var windegConversion = data.wind.deg;
        windeg.innerHTML = `${windegConversion}°C`

        var windgustConversion = data.wind.gust;
        windgust.innerHTML = `${windgustConversion}km`

        var windspeedConversion = data.wind.speed;
        windspeed.innerHTML = `${windspeedConversion}km/h`
    })
    
    
}
getWeather('c9df3198ae6e8d080c0ea20c29e35a1c', document.getElementById('country').value);


function displaySelectedValue(){
    countrycontent.innerHTML = country.value;
}
displaySelectedValue();