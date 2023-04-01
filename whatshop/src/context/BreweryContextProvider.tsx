import { ReactNode, useState } from "react";
import Brewery from "../model/Brewery";
import BreweryContext from "./BreweryContext";

export interface IEventContextProviderProps {
    children: ReactNode
}

const BreweryContextProvider = ({children}: IEventContextProviderProps) => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);

    const addBrewery = (brew: Brewery) => {
        console.log(brew);
        setBreweries([...breweries, brew]);
    }

    const removeBrewery = (id: string) => {
        setBreweries(breweries.filter((x) => x.id !== id));
    }
  
    
    return (<BreweryContext.Provider value={{
        breweries: breweries,
        addBrewery: addBrewery,
        removeBrewery: removeBrewery
    }}>{children}</BreweryContext.Provider>);
};


export default BreweryContextProvider;