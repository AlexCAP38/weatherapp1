import {weatherToday} from './fakedata.js';

const searchBar = document.querySelector('#search-bar');
const humidity = document.querySelector('#humidity-value');
const humidityBar = document.querySelector('#humidity-bar');
const barometer = document.querySelector('#barometer');
const barometerBar = document.querySelector('#barometer-bar');
const barometerDescription = document.querySelector('#barometer-description');
const visibility = document.querySelector('#visibility');
const visibilityBar = document.querySelector('#visibility-bar');
const visibilityDescription = document.querySelector('#visibility-description');
const sunrise = document.querySelector('#sunrise');
const sunriseDescription = document.querySelector('#sunrise-description');
const sunset = document.querySelector('#sunset');
const sunsetDescription = document.querySelector('#sunset-description');
const speed = document.querySelector('#speed');
const direction = document.querySelector('#direction');


searchBar && searchBar.addEventListener('input', callback);
function callback(event) {
    console.log(event.target.value);
}

humidity.textContent = `${weatherToday.humidity} %`;
humidityBar.value = weatherToday.humidity;

barometer.textContent = weatherToday.barometer;
barometerBar.value = weatherToday.barometer;
barometerDescription.textContent = 'нормально';

visibility.textContent = weatherToday.visibility;
visibilityBar.value = weatherToday.visibility;
visibilityDescription.textContent = 'нормально';

sunrise.textContent = weatherToday.sunrise;
sunriseDescription.textContent = `Прошло: 02:47`;

sunset.textContent = weatherToday.sunset;
sunsetDescription.textContent = `Осталось: 05:08`;

speed.textContent = `${weatherToday.speed} м/с`;
direction.textContent = weatherToday.direction;