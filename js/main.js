import {inputSearchBar} from './searchBar.js';
import {
    weatherToday,
    detailToday,
    otherDay
} from './mockData.js';
import {WeatherStatWidget} from './weatherStatWidget.js';
import {ForecastWidget} from './forecastWidget.js';

const widgetCard = new WeatherStatWidget(weatherToday);
const shortCardDetail = new ForecastWidget({detailToday, otherDay});

inputSearchBar();

const listCards = document.getElementById('weather-indications');

if (!listCards) {
    throw new Error('"weather-indications" not found !')
} else {
    listCards.append(
        widgetCard.createHumidityCard(),
        widgetCard.createBarometerCard(),
        widgetCard.createVisibilityCard(),
        widgetCard.createSunriseCard(),
        widgetCard.createSunsetCard(),
        widgetCard.createStrengthWindCard()
    );
}

const listOtherCards = document.getElementById('weather-group__list');
const weatherDayBtn = document.getElementById('weather-day');
const weatherFiveDaysBtn = document.getElementById('weather-five-day');

if (!weatherDayBtn || !weatherFiveDaysBtn || !listOtherCards) {
    throw new Error('Buttons "weather-day" or "weather-five-day" or "weather-group__list" not found !')
} else {
    weatherDayBtn.addEventListener('click', switchWeatherGroup);
    weatherFiveDaysBtn.addEventListener('click', switchWeatherGroup);
    listOtherCards.append(shortCardDetail.createHourDetailCard());
}

function switchWeatherGroup(event) {
    weatherDayBtn.classList.toggle('weather-group__link--underline');
    weatherFiveDaysBtn.classList.toggle('weather-group__link--underline');
    listOtherCards.innerHTML = "";

    // Render five days
    if (event.currentTarget.id === 'weather-five-day') {
        listOtherCards.append(shortCardDetail.createDayCard());
    } else {
        // Render detail hours
        listOtherCards.append(shortCardDetail.createHourDetailCard());
    }
}