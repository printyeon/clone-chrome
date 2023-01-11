const API_KEY ="249962b693357764f4318957fbeb01ea";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:fist-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    
    console.log(url);
}

function onGeoError(){
    alert("Can not find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)