import {weatherToday} from '../mockdata.js';
const templateCard = document.getElementById('template-card').content;


export const sunsetCard = templateCard.querySelector('.card').cloneNode(true);

sunsetCard.querySelector('.card__title').textContent = 'Закат';
sunsetCard.querySelector('.card__icon').src = 'images/weatherStateIcon/sunset.svg';
sunsetCard.querySelector('.card__value').textContent = weatherToday.sunset;

sunsetCard.querySelector('.card__bar').remove();

sunsetCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
sunsetCard.querySelector('.card__range-description').textContent = weatherToday.sunsetDescription;
sunsetCard.querySelector('.card__range-description:last-child').remove();