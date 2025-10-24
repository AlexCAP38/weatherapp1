import {weatherToday} from '../mockdata.js';
const templateCard = document.getElementById('template-card').content;


export const humidityCard = templateCard.querySelector('.card').cloneNode(true);

humidityCard.querySelector('.card__title').textContent = 'Влажность';
humidityCard.querySelector('.card__icon').src = 'images/weatherStateIcon/humidity.svg';
humidityCard.querySelector('.card__value').textContent = `${weatherToday.humidity} %`;

const minMaxRange = ['0 %', '100 %']
const humidityBar = humidityCard.querySelector('.card__bar');
humidityBar.min = minMaxRange[0];
humidityBar.max = minMaxRange[1];
humidityBar.value = weatherToday.humidity;

humidityCard.querySelector('.card__range-description').textContent = minMaxRange[0];
humidityCard.querySelector('.card__range-description:last-child').textContent = minMaxRange[1];