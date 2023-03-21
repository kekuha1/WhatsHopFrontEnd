import { useEffect, useState } from 'react'
import Brewery from '../Model/Brewery'
import { Col, Row } from 'reactstrap'
import { BreweryItem } from './BreweryItem'
import axios from 'axios'

export function BreweryList() {

  const [breweries, setBreweries] = useState<Brewery[]>()

  //useEffect hook to get the 12 breweries on page load
 useEffect(() => {
   axios.get<Brewery[]>('http://127.0.0.1:5001/whatshop-b56f0/us-central1/getBreweries/breweries') 
      .then(response => setBreweries(response.data))
      .catch(error => console.error(error));
  }, []);

  // useEffect(() => {
  //  axios.get<Brewery[]>('https://whatshop-b56f0.web.app/breweries') 
  //     .then(response => setBreweries(response.data))
  //     .catch(error => console.error(error));
  // }, []);
  //useEffect hook to filter the breweries from the SearchForm
  // function filterBrewerys(brewerys:Brewery[]){
  //   setBreweries(breweries)
  // }

  return (
    <div className='Brewerys'>
      {/* <SearchForm filterBrewerys={filterBrewerys}/> */}
      <Row>
        { breweries?.length ?
          breweries?.map((brewery) => (
            <Col lg="4" key={brewery.id}>
                <BreweryItem brewery={brewery} />
            </Col>
          )) || ""
        : <Col tag="h1">No breweries found for your search terms, please try again</Col>
        }
      </Row>
    </div>
  )
}