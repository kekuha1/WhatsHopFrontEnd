import Brewery from '../Model/Brewery';

export interface BreweryContextModel {
  brewery:Brewery[],
  addBrewery:(brewery:Brewery) => void,
  removeBrewery:(id:string) => void,
}

