import {weatherToday} from '../mockdata.js';
const templateCard = document.getElementById('template-card').content;


export const strengthWindCard = templateCard.querySelector('.card').cloneNode(true);

strengthWindCard.querySelector('.card__title').textContent = 'Сила ветра';
strengthWindCard.querySelector('.card__icon').src = 'images/weatherStateIcon/direction.svg';
strengthWindCard.querySelector('.card__value').textContent = `${weatherToday.speed} м/с`;

strengthWindCard.querySelector('.card__bar').remove();

strengthWindCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
strengthWindCard.querySelector('.card__range-description').textContent = weatherToday.direction;
strengthWindCard.querySelector('.card__range-description:last-child').remove();