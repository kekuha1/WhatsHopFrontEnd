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
import AuthContext from "../context/AuthContext";
import { FavoritesContextModel } from "../context/FavoritesContextModel";
import FavoritesContext from "../context/FavoritesContext";

export interface IBreweryItemProps {
  brewery : Brewery;
}

export function BreweryItem(props: IBreweryItemProps) {
  const { brewery } = props;

  const [isFavorite, setFavorite] = useState<boolean>(false);

  const { favorites, addFavorite, deleteFavorite } = useContext<FavoritesContextModel>(FavoritesContext);

  const { user } = useContext(AuthContext);
  const uid = user?.uid || null;


  useEffect(() => {
    const favorite = favorites.find((fav) => fav.breweryId === brewery.id && fav.uid === uid);
    if (favorite) {
      setFavorite(true); }
  }, [favorites, brewery.id, uid]);

  const addFavoriteHandler = () => {
    if (uid) {
      const newFavorite = { uid, breweryId: brewery.id, brewery };
      addFavorite(newFavorite);
      setFavorite(true);
    }
  };

  const removeFavoriteHandler = () => {
    if (uid) {
      const favorite = favorites.find((fav) => fav.breweryId === brewery.id && fav.uid === uid);
      if (favorite) {
        deleteFavorite(favorite._id!);
        setFavorite(false);
      }
    }
  };

  const button = isFavorite ? (
    <Button
      className="Starbutton"
      style={{ padding: 2 }}
      onClick={removeFavoriteHandler}
    >
      <img
      <img src="/beerfill.png" style={{height: "30px", width: "30px", backgroundColor:"" }}/>
         
        alt="favorite"
      />
    </Button>
  ) : (
    <Button
      className="StarbuttonEmpty"
      style={{ padding: 2 }}
      onClick={addFavoriteHandler}
    >
      <img
        <img src="/beer.avif" style={{height: "30px", width: "30px", backgroundColor:"" }}/>
        alt="not favorite"
      />
    </Button>
  );

  return (
    <CardDeck className="wholeCard">
      <Card  className="cardStyle" style={{ height: "220px" }}>
        <CardBody>
          <CardTitle className="CardText" tag="h5">Name: {brewery.name}</CardTitle>
          <CardSubtitle className="CardText">
           Location: {brewery.city}, {brewery.state}
          </CardSubtitle>
          <CardText className="CardText">Type: {brewery.brewery_type}</CardText>
          <Link to={`/reviews/${brewery.id}?name=${brewery.name}`}><button className="CardReviews">Reviews</button></Link>
      <Link to={`/brewerydetail/${brewery.id}`}><button className="CardDetails">Details</button></Link>
      {button}
        </CardBody>
      </Card>
    </CardDeck>
  );
}
