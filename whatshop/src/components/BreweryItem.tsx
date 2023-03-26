import React from "react";
import Brewery from "../model/Brewery";
import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

export interface IBreweryItemProps {
  brewery: Brewery;
}

export function BreweryItem(props: IBreweryItemProps) {
  let { brewery } = props;

  // use context here to create the addBrewery function to add something to the favorites list

  return (
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{brewery.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            {brewery.city},{brewery.state}
          </CardSubtitle>
          <CardText>{brewery.brewery_type}</CardText>
          <Link to={`/reviews/${brewery.id}?name=${brewery.name}`}>Reviews</Link>
          <Button className="AddBrewery">Add to Favorites</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
}
