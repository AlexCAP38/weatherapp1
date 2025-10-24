import {weatherToday} from '../mockdata.js';
const templateCard = document.getElementById('template-card').content;


export const visibilityCard = templateCard.querySelector('.card').cloneNode(true);

visibilityCard.querySelector('.card__title').textContent = 'Видимость';
visibilityCard.querySelector('.card__icon').src = 'images/weatherStateIcon/visibility.svg';
visibilityCard.querySelector('.card__value').textContent = `${weatherToday.visibility} км`;

const minMaxRange = [0, 100]
const visibilityBar = visibilityCard.querySelector('.card__bar');
visibilityBar.min = minMaxRange[0];
visibilityBar.max = minMaxRange[1];
visibilityBar.value = weatherToday.visibility;

visibilityCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
visibilityCard.querySelector('.card__range-description').textContent = weatherToday.visibilityDescription;
visibilityCard.querySelector('.card__range-description:last-child').remove();