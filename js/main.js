import {inputSearchBar} from './searchBar.js';
import {humidityCard} from './card/humidityCard.js';
import {barometerCard} from './card/barometerCard.js';
import {visibilityCard} from './card/visibilityCard.js';
import {sunriseCard} from './card/sunriseCard.js';
import {sunsetCard} from './card/sunsetCard.js';
import {strengthWindCard} from './card/strengthWindCard.js';

const listCards = document.getElementById('weather-list');

inputSearchBar();

listCards.append(
    humidityCard,
    barometerCard,
    visibilityCard,
    sunriseCard,
    sunsetCard,
    strengthWindCard
)