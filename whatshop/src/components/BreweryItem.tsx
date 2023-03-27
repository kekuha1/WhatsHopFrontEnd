import React from "react";
import Brewery from "../model/Brewery";
import starfillsvg from "../../src/assets/starfill.svg"
import staremptysvg from "../../src/assets/starempty.svg"
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

  function removeEvent(id: any) {
    throw new Error("Function not implemented.");
  }

  function setFavorite(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  // use context here to create the addBrewery function to add something to the favorites list

  return (
    <CardDeck className="wholeCard">
      <Card  className="cardStyle">
        <CardBody>
          <CardTitle tag="h5">{brewery.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            {brewery.city},{brewery.state}
          </CardSubtitle>
          <CardText>{brewery.brewery_type}</CardText>
          <Link to={`/reviews/${brewery.id}?name=${brewery.name}`}>Reviews</Link>
  {/* <Button className="Starbutton" style={{padding: 2}} onClick={() => {
            }}>
        <img style={{height: "30px", width: "30px", backgroundColor: "yellow"}} src={starfillsvg}></img>
    </Button>; */}
    <Button className="Starbutton" style={{padding: 2}} onClick={() => {
            }}>
        <img style={{height: "30px", width: "30px"}} src={staremptysvg}></img>
    </Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
}