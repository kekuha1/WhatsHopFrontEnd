import { createContext } from "react";
import { BreweryContextModel } from "../context/BreweryContextModel";

const defaultValue:BreweryContextModel = {
    breweries: [],
    addBrewery: () => {},
    removeBrewery: () => {}
}

const BreweryContext = createContext(defaultValue)

export default BreweryContext;