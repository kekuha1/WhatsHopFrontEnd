import React, { useContext, useEffect, useState } from "react";
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
import BreweryContext from "../context/BreweryContext";
import { CollectionReference } from "firebase/firestore";

export interface IBreweryItemProps {
  brewery : Brewery;
}

export function BreweryItem(props: IBreweryItemProps) {
  let { brewery } = props;

  const [isFavorite, setFavorite] = useState<Boolean>(false);
  const { addBrewery } = useContext(BreweryContext);


  const { removeBrewery, breweries } = useContext(BreweryContext);
    useEffect(() => {
        if (breweries.find((brew:Brewery) => brew.id === brewery.id)) {
            setFavorite(true);
        }
    },[])

    console.log(breweries);

    let button;
    if (isFavorite){
        button= <Button className="Starbutton" style={{padding: 2}} onClick={() => {
            removeBrewery(brewery.id);
            setFavorite(false);
            }}>
        <img style={{height: "30px", width: "30px", backgroundColor:"yellow" }} src={starfillsvg}></img>
    </Button>;
    } else {
        button= <Button className="StarbuttonEmpty" style={{padding: 2}} onClick={() => {
            addBrewery(brewery);
            setFavorite(true);
            }}>
        <img style={{height: "30px", width: "30px", backgroundColor:"white"}} src={staremptysvg}></img>
    </Button>;
    }

  // function removeBrewery(id: any) {
  //   throw new Error("Function not implemented.");
  // }

  // function setBreweries(arg0: boolean) {
  //   throw new Error("Function not implemented.");
  // }

  // use context here to create the addBrewery function to add something to the favorites list

  return (
    <CardDeck className="wholeCard">
      <Card  className="cardStyle">
        <CardBody>
          <CardTitle tag="h5">Name: {brewery.name}</CardTitle>
          <CardSubtitle className="mb-1 text-muted">
           Location:{brewery.city}, {brewery.state}
          </CardSubtitle>
          <CardText>Type: {brewery.brewery_type}</CardText>
          <Link to={`/reviews/${brewery.id}?name=${brewery.name}`}><button className="CardReviews">Reviews</button></Link>
      <Link to={`/brewerydetail/${brewery.id}`}><button className="CardDetails">Details</button></Link>
      {button}
        </CardBody>
      </Card>
    </CardDeck>
  );
}
