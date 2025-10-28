export class Widget {

    #templateCard;
    #data;

    constructor(data) {
        this.#data = data;

        const tplElem = document.getElementById('widget-card-template')
        if (!tplElem) throw new Error('"widget-card-template" not found in DOM');
        this.#templateCard = tplElem.content;
    }

    createHumidityCard = () => {

        const humidityCard = this.#templateCard.querySelector('.card').cloneNode(true);

        humidityCard.querySelector('.card__title').textContent = 'Влажность';
        humidityCard.querySelector('.card__icon').src = 'images/widgetIcons/humidity.svg';
        humidityCard.querySelector('.card__value').textContent = `${this.#data.humidity} %`;

        const humidityBar = humidityCard.querySelector('.card__bar');
        humidityBar.style.setProperty('--hole-x', `${this.#data.humidity}%`);

        humidityCard.querySelector('.card__range-description').textContent = '0%';
        humidityCard.querySelector('.card__range-description:last-child').textContent = '100%';

        return humidityCard

    }

    createBarometerCard = () => {
        const barometerCard = this.#templateCard.querySelector('.card').cloneNode(true);

        barometerCard.querySelector('.card__title').textContent = 'Давление';
        barometerCard.querySelector('.card__icon').src = 'images/widgetIcons/barometer.svg';
        barometerCard.querySelector('.card__value').textContent = this.#data.barometer;

        const barometerBar = barometerCard.querySelector('.card__bar');
        barometerBar.style.setProperty('--hole-x', `${this.#setPosition(653, 814, this.#data.barometer)}%`);
        barometerBar.style.setProperty('--background-tack', `var(--gradient)`);

        barometerCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
        barometerCard.querySelector('.card__range-description').textContent = this.#data.barometerDescription;
        barometerCard.querySelector('.card__range-description:last-child').remove();

        return barometerCard
    }

    #setPosition(min, max, value) {
        return ((value - min) / (max - min)) * 100
    }

    createVisibilityCard = () => {
        const visibilityCard = this.#templateCard.querySelector('.card').cloneNode(true);

        visibilityCard.querySelector('.card__title').textContent = 'Видимость';
        visibilityCard.querySelector('.card__icon').src = 'images/widgetIcons/visibility.svg';
        visibilityCard.querySelector('.card__value').textContent = `${this.#data.visibility} км`;

        const visibilityBar = visibilityCard.querySelector('.card__bar');
        visibilityBar.style.setProperty('--hole-x', `${this.#data.visibility}%`);

        visibilityCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
        visibilityCard.querySelector('.card__range-description').textContent = this.#data.visibilityDescription;
        visibilityCard.querySelector('.card__range-description:last-child').remove();

        return visibilityCard;
    }

    createSunriseCard = () => {
        const sunriseCard = this.#templateCard.querySelector('.card').cloneNode(true);

        sunriseCard.querySelector('.card__title').textContent = 'Рассвет';
        sunriseCard.querySelector('.card__icon').src = 'images/widgetIcons/sunrise.svg';
        sunriseCard.querySelector('.card__value').textContent = this.#data.sunrise;

        sunriseCard.querySelector('.card__bar').remove();

        sunriseCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
        sunriseCard.querySelector('.card__range-description').textContent = this.#data.sunriseDescription;
        sunriseCard.querySelector('.card__range-description:last-child').remove();
        return sunriseCard
    }

    createSunsetCard = () => {

        const sunsetCard = this.#templateCard.querySelector('.card').cloneNode(true);

        sunsetCard.querySelector('.card__title').textContent = 'Закат';
        sunsetCard.querySelector('.card__icon').src = 'images/widgetIcons/sunset.svg';
        sunsetCard.querySelector('.card__value').textContent = this.#data.sunset;

        sunsetCard.querySelector('.card__bar').remove();

        sunsetCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
        sunsetCard.querySelector('.card__range-description').textContent = this.#data.sunsetDescription;
        sunsetCard.querySelector('.card__range-description:last-child').remove();
        return sunsetCard
    }

    createStrengthWindCard = () => {

        const strengthWindCard = this.#templateCard.querySelector('.card').cloneNode(true);

        strengthWindCard.querySelector('.card__title').textContent = 'Сила ветра';
        strengthWindCard.querySelector('.card__icon').src = 'images/widgetIcons/direction.svg';
        strengthWindCard.querySelector('.card__value').textContent = `${this.#data.speed} м/с`;

        strengthWindCard.querySelector('.card__bar').remove();

        strengthWindCard.querySelector('.card__range-container').classList.add('card__bar-container--center');
        strengthWindCard.querySelector('.card__range-description').textContent = this.#data.direction;
        strengthWindCard.querySelector('.card__range-description:last-child').remove();
        return strengthWindCard
    }
}