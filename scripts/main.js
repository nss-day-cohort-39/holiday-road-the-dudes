import { getParks } from "./parks/ParksDataProvider.js";
import { getEateries } from "./eateries/EateryDataProvider.js";
import { getAttractions } from "./attractions/BizzareDataProvider.js";
import { getWeather } from "./weather/WeatherDataProvider.js";
import { parksSelect } from "./parks/ParksDropdown.js";
import { eateriesSelect } from "./eateries/EateryDropdown.js";
import { attractionslSelect } from "./attractions/BizzareDropdown.js";
import './itinerary/itineraryPreview.js';
import './weather/WeatherDisplay.js';



getEateries().then(eateriesSelect)
getAttractions().then(attractionslSelect)
getParks().then(parksSelect)
// getWeather()



