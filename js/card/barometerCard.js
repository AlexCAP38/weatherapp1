import {weatherToday} from '../mockdata.js';
const templateCard = document.getElementById('template-card').content;


export const barometerCard = templateCard.querySelector('.card').cloneNode(true);

barometerCard.querySelector('.card__title').textContent = 'Давление';
barometerCard.querySelector('.card__icon').src = 'images/weatherStateIcon/barometer.svg';
barometerCard.querySelector('.card__value').textContent = weatherToday.barometer;

const minMaxRange = [653, 814]
const barometerBar = barometerCard.querySelector('.card__bar');
barometerBar.min = minMaxRange[0];
barometerBar.max = minMaxRange[1];
barometerBar.value = weatherToday.barometer;
barometerBar.classList.add('card__bar--gradient');

barometerCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
barometerCard.querySelector('.card__range-description').textContent = weatherToday.barometerDescription;
barometerCard.querySelector('.card__range-description:last-child').remove();