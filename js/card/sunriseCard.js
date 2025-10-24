import {weatherToday} from '../mockdata.js';
const templateCard = document.getElementById('template-card').content;


export const sunriseCard = templateCard.querySelector('.card').cloneNode(true);

sunriseCard.querySelector('.card__title').textContent = 'Рассвет';
sunriseCard.querySelector('.card__icon').src = 'images/weatherStateIcon/sunrise.svg';
sunriseCard.querySelector('.card__value').textContent = weatherToday.sunrise;

sunriseCard.querySelector('.card__bar').remove();

sunriseCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
sunriseCard.querySelector('.card__range-description').textContent = weatherToday.sunriseDescription;
sunriseCard.querySelector('.card__range-description:last-child').remove();