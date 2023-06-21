import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { deleteFavorite } from "../services/favoritesservice";
import  Favorites  from "../model/Favorites";
import { Link } from "react-router-dom";

interface IFavoritesItemProps {
  favorite: Favorites;
  onDelete: () => void;
}

export function FavoritesItem({ favorite, onDelete }: IFavoritesItemProps) {
  const handleDelete = async () => {
    await deleteFavorite(favorite._id!);
    onDelete();
  };

  return (
    <Card className="FavoriteCard">
      <CardBody>
        <CardTitle tag="h5">{favorite.brewery.name}</CardTitle>
        <CardSubtitle>{favorite.brewery.city}, {favorite.brewery.state}</CardSubtitle>
        <CardText>{favorite.brewery.brewery_type}</CardText>
        <Link to={`/reviews/${favorite.brewery.id}?name=${favorite.brewery.name}`}><button className="CardReviews">Reviews</button></Link>
      <Link to={`/brewerydetail/${favorite.brewery.id}`}><button className="CardDetails">Details</button></Link>
        <Button onClick={handleDelete} className="RemoveButton">X</Button>
      </CardBody>
    </Card>
  );
};