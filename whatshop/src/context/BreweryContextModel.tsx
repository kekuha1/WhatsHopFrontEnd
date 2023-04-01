import Brewery from "../model/Brewery";

export interface BreweryContextModel  {
    breweries : Brewery[],
    addBrewery: (brew: Brewery) => void,
    removeBrewery: (id: string) => void
}