import {inputSearchBar} from './searchBar.js';
import {
    weatherToday,
    detailToday,
    otherDay
} from './mockData.js';
import {Widget} from './widget.js';
import {WidgetOther} from './widgetOther.js';

const widgetCard = new Widget(weatherToday);
const shortCardDetail = new WidgetOther({detailToday, otherDay});

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
    // Render five days
    if (event.currentTarget.id === 'weather-five-day') {
        weatherDayBtn.classList.remove('weather-group__link--underline');
        weatherFiveDaysBtn.classList.add('weather-group__link--underline');
        listOtherCards.innerHTML = "";
        listOtherCards.append(shortCardDetail.createDayCard());
    } else {
        // Render detail hours
        weatherDayBtn.classList.add('weather-group__link--underline');
        weatherFiveDaysBtn.classList.remove('weather-group__link--underline');
        listOtherCards.innerHTML = "";
        listOtherCards.append(shortCardDetail.createHourDetailCard());
    }
}