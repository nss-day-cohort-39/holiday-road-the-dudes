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
<<<<<<< HEAD
import  {savedTripsFunc, renderSavedItineraries } from "./itinerary/ItineraryList.js";
import './itinerary/ItineraryList.js'
=======
import { renderSavedItineraries, savedTripsFunc } from "./itinerary/ItineraryList.js";
import './parks/ParkDialogBox.js';


>>>>>>> master

getEateries()
    .then(eateriesSelect)
    .then(getAttractions)
    .then(attractionslSelect)
    .then(getParks)
    .then(parksSelect)
    .then(renderSavedItineraries)
    .then(savedTripsFunc)




