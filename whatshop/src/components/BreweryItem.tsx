import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, CardDeck, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { fetchFavoritesByUserId, addFavorite, deleteFavorite } from "../services/favoritesservice";
import Brewery from "../model/Brewery";

export interface IBreweryItemProps {
  brewery: Brewery;
}

export function BreweryItem(props: IBreweryItemProps) {
  const { brewery } = props;

  const { user } = useContext(AuthContext);
  const uid = user?.uid || null;

  const [isFavorite, setFavorite] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      setLoading(true);

      // Check if the brewery is already favorited
      const favorites = await fetchFavoritesByUserId(uid ?? "");
      const isBreweryFavorite = favorites.some((fav) => fav.breweryId === brewery.id);

      setFavorite(isBreweryFavorite);
      setLoading(false);
    };

    if (uid) {
      fetchFavoriteStatus();
    }
  }, [brewery.id, uid]);

  const addFavoriteHandler = async () => {
    if (uid) {
      try {
        // Add the brewery to favorites
        await addFavorite({ uid, breweryId: brewery.id, brewery });
        setFavorite(true);
      } catch (error) {
        console.log("Error adding favorite:", error);
      }
    }
  };

  const removeFavoriteHandler = async () => {
    if (uid) {
      try {
        // Remove the brewery from favorites
        const favorites = await fetchFavoritesByUserId(uid);
        const favorite = favorites.find((fav) => fav.breweryId === brewery.id);

        if (favorite) {
          await deleteFavorite(favorite._id!);
          setFavorite(false);
        }
      } catch (error) {
        console.log("Error removing favorite:", error);
      }
    }
  };

  const button = isLoading ? (
    <Button disabled>Loading...</Button>
  ) : isFavorite ? (
    <Button className="Starbutton" style={{ padding: 2 }} onClick={removeFavoriteHandler}>
      <img
        src="/beer.avif"
        style={{ height: "30px", width: "30px", backgroundColor: "" }}
        alt="not favorite"
      />
    </Button>
  ) : (
    <Button className="StarbuttonEmpty" style={{ padding: 2 }} onClick={addFavoriteHandler}>
      <img
        src="/beerfill.png"
        style={{ height: "30px", width: "30px", backgroundColor: "" }}
        alt="favorite"
      />
    </Button>
  );

  return (
    <CardDeck className="wholeCard">
      <Card className="cardStyle" style={{ height: "220px" }}>
        <CardBody>
          <CardTitle className="CardText" tag="h5">
            {brewery.name}
          </CardTitle>
          <CardSubtitle className="CardText">
            <b>Location:</b> {brewery.city}, {brewery.state}
          </CardSubtitle>
          <CardText className="CardText">
            <b>Type:</b> {brewery.brewery_type}
          </CardText>
          <Link to={`/reviews/${brewery.id}?name=${brewery.name}`}>
            <button className="CardReviews">Reviews</button>
          </Link>
          <Link to={`/brewerydetail/${brewery.id}`}>
            <button className="CardDetails">Details</button>
          </Link>
          {button}
        </CardBody>
      </Card>
    </CardDeck>
  );
}

