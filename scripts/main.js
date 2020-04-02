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
import  { savedTripsFunc, renderSavedItineraries } from "./itinerary/ItineraryList.js";
import './parks/ParkDialogBox.js';
import './itinerary/ItineraryList.js';
import './eateries/EateryDialogBox.js';
import './attractions/BizzareDialogBox.js'
import { prompt } from "./prompt.js";
import { useCoordinates } from "./directions/DirectionProvider.js";
import './itinerary/ItineraryDialogBox.js';

prompt()

getEateries()
    .then(eateriesSelect)
    .then(getAttractions)
    .then(attractionslSelect)
    .then(getParks)
    .then(parksSelect)
    .then(getSavedItineraries)
    .then(renderSavedItineraries)
    .then(savedTripsFunc)

    
   
    

    
    




