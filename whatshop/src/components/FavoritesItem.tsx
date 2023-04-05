import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import Brewery from "../model/Brewery";
import { deleteFavorite } from "../services/favoritesservice";



interface IFavoritesItemProps {
  brewery: Brewery;
  onDelete: () => void;
}

export function FavoritesItem ({ brewery, onDelete } : IFavoritesItemProps) {

  const handleDelete = async () => {
    await deleteFavorite(brewery.id);
    onDelete();
  };

  return (
    <Card style={{ height: "220px" }}>
      <CardBody>
        <CardTitle tag="h5">{brewery.name}</CardTitle>
        <CardSubtitle>{brewery.city}, {brewery.state}</CardSubtitle>
        <CardText>{brewery.brewery_type}</CardText>
        <Link to={`/reviews/${brewery.id}?name=${brewery.name}`}><Button color="primary">Reviews</Button></Link>
        <Link to={`/brewerydetail/${brewery.id}`}><Button color="primary">Details</Button></Link>
        <Button color="danger" onClick={handleDelete}>Remove</Button>
      </CardBody>
    </Card>
  );
};