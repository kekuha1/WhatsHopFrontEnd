import React from 'react';
import Brewery from '../model/Brewery';
import { Button, Card, CardBody, CardDeck, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

export interface IBreweryDetailProps {
    brewery: Brewery
  }

export function BreweryDetail({}, props: IBreweryDetailProps) {
    let {brewery} = props;
  
return (
     <Card>
       <CardBody>
         <CardTitle tag="h5">{brewery.name}</CardTitle>
         <CardText>
           {brewery.street}
           {brewery.address_2}
           {brewery.address_3}
         </CardText>
         <CardText>
           {brewery.city},{brewery.state}, {brewery.postal_code}
         </CardText>
         <CardText>{brewery.phone}</CardText>
         <CardText>{brewery.website_url}</CardText>
         <CardText>{brewery.brewery_type}</CardText>
         {/* *Need to use this spot for average user ratings */}
         <Link to={`/reviewsroute/${brewery.id}`}>Reviews</Link>
         {/* add onClick function */}
         {/* <Button className="AddBrewery">
           Add to Favorites
           </Button>   */}
       </CardBody>
     </Card>
  )
}