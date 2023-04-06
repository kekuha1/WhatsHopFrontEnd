import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { deleteFavorite } from "../services/favoritesservice";
import  Favorites  from "../model/Favorites";

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
    <Card style={{ height: "220px" }}>
      <CardBody>
        <CardTitle tag="h5">{favorite.brewery.name}</CardTitle>
        <CardSubtitle>{favorite.brewery.city}, {favorite.brewery.state}</CardSubtitle>
        <CardText>{favorite.brewery.brewery_type}</CardText>
        <Button color="primary">Reviews</Button>
        <Button color="primary">Details</Button>
        <Button color="danger" onClick={handleDelete}>Remove</Button>
      </CardBody>
    </Card>
  );
};