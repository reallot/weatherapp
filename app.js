const wrapper = document.querySelector(".wrapper"),
    inputPart = wrapper.querySelector(".input-part"),
    infoTxt = inputPart.querySelector(".info-txt"),
    inputField = inputPart.querySelector("input"),
    submitBtn = inputPart.querySelector(".submit-btn"),
    locationBtn = inputPart.querySelector("button:not(.submit-btn)"),
    wIcon = document.querySelector(".weather-part img"),
    arrowBack = document.querySelector("header i");

let api;

// Weather and Icon matching
function getWeatherIcon(weatherCode) {
    if (weatherCode == 800) {
        return "assets/weather/clear.svg";
    } else if (weatherCode >= 200 && weatherCode <= 232) {
        return "assets/weather/thunderstorm.svg";
    } else if (weatherCode >= 600 && weatherCode <= 622) {
        return "assets/weather/snow.svg";
    } else if (weatherCode >= 701 && weatherCode <= 781) {
        return "assets/weather/atmosphere.svg";
    } else if (weatherCode >= 801 && weatherCode <= 804) {
        return "assets/weather/clouds.svg";
    } else if ((weatherCode >= 300 && weatherCode <= 321) || (weatherCode >= 500 && weatherCode <= 531)) {
        return "assets/weather/rain.svg";
    } else if (weatherCode >= 300 && weatherCode <= 321) {
        return "assets/weather/drizzle.svg";
    } else {
        return "assets/weather/clear.svg";
    }
}

inputField.addEventListener("keyup", e => {
    if (e.key == "Enter" && inputField.value != "") {
        requestApi(inputField.value);
    }
});

submitBtn.addEventListener("click", () => {
    if (inputField.value != "") {
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        infoTxt.innerText = "Your browser doesn't support geolocation...";
        infoTxt.classList.add("error");
    }
});

function onSuccess(position) {
    const { latitude, longitude } = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=5343ed049404013456f9debc133c912e`;
    fetchData();
}

function onError(error) {
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5343ed049404013456f9debc133c912e`;
    fetchData();
}

function fetchData() {
    infoTxt.innerText = "Getting weather results...";
    infoTxt.classList.add("pending");
    if(inputField.value.toLowerCase() == "kurdistan"){
        return weatherDetails("kurdistan");
    }
    
    fetch(api)
        .then(response => response.json())
        .then(result => weatherDetails(result));
}

function weatherDetails(info) {
    if (info.cod == "404" || info == "kurdistan") {
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerHTML = `
            <div style="text-align: center;">
                <img src="assets/message/not-found.png" alt="City Not Found" style="width: 100px; height: auto; margin-bottom: 15px;">
                <p style="color: #e74c3c; font-size: 16px; font-weight: bold; margin: 0;">${inputField.value} city not found!</p>
                <p style="color: #7f8c8d; font-size: 14px; margin-top: 8px;">Please enter a valid city name.</p>
            </div>
        `;
    } else {
        const city = info.name;
        const country = info.sys.country;
        const { description, id } = info.weather[0];
        const { feels_like, humidity, temp } = info.main;

        wIcon.src = getWeatherIcon(id);

        wrapper.querySelector(".temp .numb").innerText = Math.floor(temp);
        wrapper.querySelector(".weather").innerText = description;
        wrapper.querySelector(".location span").innerText = `${city}, ${country}`;
        wrapper.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        wrapper.querySelector(".humidity span").innerText = `${humidity}%`;

        infoTxt.classList.remove("pending", "error");
        wrapper.classList.add("active");
    }
}

arrowBack.addEventListener("click", () => {
    wrapper.classList.remove("active");
    inputField.value = "";
});
