import { getParks } from "./parks/ParksDataProvider.js";
import { getEateries } from "./eateries/EateryDataProvider.js";
import { getAttractions } from "./attractions/BizzareDataProvider.js";
import { getWeather } from "./weather/WeatherDataProvider.js";
import { parksSelect } from "./parks/ParksDropdown.js";
import { eateriesSelect } from "./eateries/EateryDropdown.js";
import { attractionslSelect } from "./attractions/BizzareDropdown.js";
import './itinerary/itineraryPreview.js';
import { getSavedItineraries } from "./itinerary/ItineraryDataProvider.js";
import './itinerary/SaveItineraryPreview.js';
import './weather/WeatherDisplay.js';
import { renderSavedItineraries } from "./itinerary/ItineraryList.js";
import './parks/ParkDialogBox.js';



getEateries()
    .then(eateriesSelect)
    .then(getAttractions)
    .then(attractionslSelect)
    .then(getParks)
    .then(parksSelect)
    .then(getSavedItineraries)
    .then(renderSavedItineraries)

// getWeather()



