import { useState } from "react";
import { queryBreweries } from "../services/breweryservices";
// import firebase from 'firebase/app';
// import 'firebase/functions';

export interface ISearchFormProps {
  filterBreweries: Function
}

export function SearchForm (props: ISearchFormProps) {

  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');

function handleSubmit(e:React.FormEvent<HTMLElement>){
  e.preventDefault()
  ///make an API call based on whats in form
  queryBreweries(city, state).then(data => {
    console.log({data})
    props.filterBreweries(data)})
  //take what you get back and feed into the filterEvents function that was passed in 
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input type="text" id="city" className="form-control" placeholder="Search..." onChange={(e) => setCity(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="state">State</label>
    <input type="text" id="state" className="form-control" placeholder="Search..." onChange={(e) => setState(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}


