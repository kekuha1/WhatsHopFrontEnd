import React, { useState } from 'react'
import Brewery from '../Model/Brewery'
import SearchForm from './SearchForm'
import { Col, Row } from 'reactstrap'
import { BreweryItem } from './BreweryItem'

export function BreweryList() {

  const [brewerys, setBrewerys] = useState<Brewery[]>()

  //useEffect hook to get the 12 breweries on page load

  //useEffect hook to filter the breweries from the SearchForm
  function filterBrewerys(brewerys:Brewery[]){
    setBrewerys(brewerys)
  }

  return (
    <div className='Brewerys'>
      {/* <SearchForm filterBrewerys={filterBrewerys}/> */}
      <Row>
        { brewerys?.length ?
          brewerys?.map((brewery) => (
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