import React, { createContext, useEffect, useState } from 'react'
import Brewery from '../Model/Brewery';
import axios from "axios";


const defaultValue:BreweryContextModel={
  brewery:[],
  addBrewery:() => {},
  removeBrewery:() => {},
}

const BreweryContext = createContext(defaultValue)