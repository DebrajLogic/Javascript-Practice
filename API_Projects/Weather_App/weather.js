const cloud_pct = document.querySelector("#cloud_pct");
const temp = document.querySelector("#temp");
const feels_like = document.querySelector("#feels_like");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind_speed");
const wind_degrees = document.querySelector("#wind_degrees");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const place = document.querySelector("#place");

const button = document.querySelector("#submit");
let LOC = document.querySelector("#input").value;

function fetchWeatherData(place) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4190a9173emshcc9e0e05379f7e5p1cfb92jsnc805710216c9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      console.log("result = ", result);
      displayData(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  LOC = document.querySelector("#input").value;
  fetchWeatherData(LOC);

  //   console.log(LOC);
  console.log("location =", LOC);
  document.querySelector("#input").value = "";
});

function displayData(result) {
  if (result.error) {
    place.innerText = "Enter Valid Location...";
    place.style.color = "red";
    return;
  }
  place.style.color = "lightgreen";
  cloud_pct.style.color = "lightgreen";
  temp.style.color = "lightgreen";
  feels_like.style.color = "lightgreen";
  humidity.style.color = "lightgreen";
  wind_speed.style.color = "lightgreen";
  wind_degrees.style.color = "lightgreen";
  sunrise.style.color = "lightgreen";
  sunset.style.color = "lightgreen";
  place.style.color = "lightgreen";
  //   console.log("sunrise = ", result.sunrise);
  //   console.log("sunset = ", result.sunset);
  let date1 = new Date(result.sunrise * 1000);
  let date2 = new Date(result.sunset * 1000);
  const sRise = date1.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
  const sSet = date2.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

  place.innerText = LOC;
  //   console.log("cloud = ", result.cloud_pct);
  cloud_pct.innerText = `${result.cloud_pct}`;
  temp.innerText = `${result.temp}`;
  feels_like.innerText = `${result.feels_like}`;
  humidity.innerText = `${result.humidity}`;
  //   console.log("wind_speed = ", result.wind_speed);
  wind_speed.innerText = `${result.wind_speed}`;

  wind_degrees.innerText = `${result.wind_degrees}`;
  sunrise.innerText = `${sRise}`;
  sunset.innerText = `${sSet}`;
}
