import * as React from 'react';
import { useParams } from 'react-router-dom';
import Brewery from '../model/Brewery'
import { useEffect, useState } from 'react';

export interface IReviewsRouteProps {
  
}

export function ReviewsRoute (props: IReviewsRouteProps) {
  //used to capture the id for the brewery
  const {id} = useParams<{id:string}>();
  console.log(id)
  //used to capture the brewery name to display it to the screen
  const {name} = useParams<{name:string}>();

  // const [reviews, setReviews] = useState<Reviews[]>();
  // useEffect(loadReviews, [])

    // function loadReviews() {
    //   fetchReviews().then(setReviews)
    // }
    const [breweries, setBreweries] = useState<Brewery[]>([]);

    useEffect(() => {
      fetch(`https://api.openbrewerydb.org/breweries`)
        .then(response => response.json())
        .then(data => setBreweries(data))
        .catch(error => console.log(error));
    }, []);
  
    return (
      <div className='ReviewsRoute'>
        <h1>Breweries:</h1>
        <ul>
          {breweries.map((brewery: Brewery) => (
            <li key={brewery.id}>
              <h2>{brewery.name}</h2>
              <p>{brewery.city}, {brewery.state}</p>
              <a ref={brewery.website_url}>{brewery.website_url}</a>
            </li>
          ))}
        </ul>
      </div>
    );

}
