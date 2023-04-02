import { useEffect, useState, useContext } from 'react'
import Brewery from '../model/Brewery'
import { Col, Row } from 'reactstrap'
import { BreweryItem } from './BreweryItem'
import { SearchForm } from './SearchForm'
import { GetAllBreweries, queryBreweries } from '../services/breweryservices'
import { BreweryButtonBar } from './BreweryButtonBar'
import AuthContext from '../context/AuthContext'
import ProfileRoute from './ProfileRoute'


export function BreweryList() {
  const [breweries, setBreweries] = useState<Brewery[]>();
  const { user } = useContext(AuthContext);

  //useEffect hook to get the 12 breweries on page load
  useEffect(() => {
    GetAllBreweries().then(data => setBreweries(data));
  }, []);

 function filterBreweries(searchParams: { city: string, state: string }) {
  queryBreweries(searchParams.city, searchParams.state)
    .then((breweries) => setBreweries(breweries))
}

  function handleButtonClick(city: string, state: string) {
  const searchParams = { city, state };
  queryBreweries(searchParams.city, searchParams.state).then(data => setBreweries(data));
}

  return (
    <div className="Breweries">
      <img src='/featured brewery.png' alt='Logo' style={{ height: '100px', width: "100px" }} />
      <ProfileRoute />
      <p>{user?.uid}</p>
      <SearchForm filterBreweries={filterBreweries} />
      <div className='Button-Bar'>
      <h5 className='topcityheader'>Search by top ten Beer Cities!</h5>
      <BreweryButtonBar onButtonClick={handleButtonClick} />
      </div>
      <Row>
        {breweries?.length ? (
          breweries?.map((brewery) => (
            <Col xs="12" sm="6" md="4" lg="3" key={brewery.id}>
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