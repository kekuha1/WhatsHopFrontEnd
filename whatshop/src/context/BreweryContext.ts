import { createContext } from 'react';
import Brewery from '../Model/Brewery';
import { BreweryContextModel } from './BreweryContextModel';

const defaultValue:BreweryContextModel={
  brewery:[],
  addBrewery:() => {},
  removeBrewery:() => {},
}

const BreweryContext = createContext(defaultValue)

export default BreweryContext