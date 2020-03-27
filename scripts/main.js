import { getParks } from "./parks/ParksDataProvider.js";
import { getEateries } from "./eateries/EateryDataProvider.js";
import { getAttractions } from "./attractions/BizzareDataProvider.js";
import { getWeather } from "./weather/WeatherDataProvider.js";
import { parksSelect } from "./parks/ParksDropdown.js";
import { eateriesSelect } from "./eateries/EateryDropdown.js";



// getAttractions()
getEateries().then(eateriesSelect)
getParks().then(parksSelect)
// getWeather()
