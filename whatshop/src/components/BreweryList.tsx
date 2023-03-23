import { useEffect, useState } from 'react'
import Brewery from '../Model/Brewery'
import { Col, Row } from 'reactstrap'
import { BreweryItem } from './BreweryItem'
import axios from 'axios'
import { SearchForm } from './SearchForm'
import { GetAllBreweries } from '../services/breweryservices'


export function BreweryList() {
  const [breweries, setBreweries] = useState<Brewery[]>();

  //useEffect hook to get the 12 breweries on page load
 useEffect(() => {
   GetAllBreweries().then(data => setBreweries(data));
  }, []);

  function filterBreweries(breweries:Brewery[]){
    setBreweries(breweries)
  }

  return (
    <div className="Breweries">
      <SearchForm filterBrewerys={filterBrewerys}/>

      <Row>
        {breweries?.length ? (
          breweries?.map((brewery) => (
            <Col lg="4" key={brewery.id}>
              <BreweryItem brewery={brewery} />
            </Col>
          )) || ""
        ) : (
          <Col tag="h1">
            No breweries found for your search terms, please try again
          </Col>
        )}
      </Row>
    </div>
  );
}
