import { useState } from "react";
import { queryBreweries } from "../services/breweryservices";
// import firebase from 'firebase/app';
// import 'firebase/functions';

export interface ISearchFormProps {
  filterBreweries: (searchParams: { city: string, state: string }) => void
}

export function SearchForm (props: ISearchFormProps) {

  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');

  function handleSubmit(e:React.FormEvent<HTMLElement>){
    e.preventDefault()
    const searchParams = { city, state };
    props.filterBreweries(searchParams);
  }

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-group">
          <label htmlFor="city"></label>
          <input type="text" id="city" className="form-control" placeholder="Input City" onChange={(e) => setCity(e.target.value.replace(/^\s+|\s+$/g, ''))} />
        </div>
        <div className="form-group">
          <label htmlFor="state"></label>
          <input type="text" id="state" className="form-control" placeholder="Input State" onChange={(e) => setState(e.target.value.replace(/^\s+|\s+$/g, ''))} />
        </div>
        <button type="submit" className="Searchbutton">Submit</button>
      </form>
    </div>
  );
}


