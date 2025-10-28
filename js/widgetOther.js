export class WidgetOther {

    #templateCard;
    #data;

    constructor(data) {
        this.#data = data;

        const tplElem = document.getElementById('weather-group-template')
        if (!tplElem) throw new Error('"weather-group-template" not found in DOM');
        this.#templateCard = tplElem.content;
    }

    /**
     * Создаёт детальные почасовые карточки из шаблона.
     */

    createHourDetailCard = () => {

        const fragCards = document.createDocumentFragment();

        this.#data.detailToday.forEach(element => {
            const shortCard = this.#templateCard.querySelector('#detail-card').cloneNode(true);

            shortCard.querySelector('#time').textContent = element.time;
            shortCard.querySelector('#time').setAttribute('datetime', element.time);
            shortCard.querySelector('#image').src = 'images/weatherStateIcons/brokenCloudsDay.svg';

            shortCard.querySelector('#temperature').textContent = `${element.temperature}°`;

            fragCards.append(shortCard);
        });

        return fragCards
    }

    /**
     * Создаёт дневную карточку из шаблона.
     */

    createDayCard = () => {

        const fragCards = document.createDocumentFragment();

        this.#data.otherDay.forEach(element => {
            const shortCard = this.#templateCard.querySelector('#detail-card').cloneNode(true);

            shortCard.querySelector('#time').textContent = element.date;
            shortCard.querySelector('#time').setAttribute('datetime', element.date);
            shortCard.querySelector('#image').src = 'images/weatherStateIcons/fewCloudsDay.svg';

            shortCard.querySelector('#temperature').textContent = `от ${element.temperature[0]}° до ${element.temperature[1]}°`;

            fragCards.append(shortCard);
        });

        return fragCards
    }
}