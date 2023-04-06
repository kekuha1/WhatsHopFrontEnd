import { useEffect, useState, useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Favorites from "../model/Favorites";
import AuthContext from "../context/AuthContext";
import { fetchFavoritesByUserId } from "../services/favoritesservice";
import { Col, Container, Row } from "reactstrap";
import {FavoritesItem} from "./FavoritesItem";

function FavoritesPage() {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState<Favorites[]>([]);
  console.log(favorites)

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        const uid = user.uid;
        const data = await fetchFavoritesByUserId(uid);
        setFavorites(data);
      }
    };
    fetchFavorites();
  }, [user]);

  const handleDelete = async () => {
    const uid = user?.uid;
    const data = await fetchFavoritesByUserId(uid ?? "");
    setFavorites(data);
  };

  return (
    <Container>
      <Row>
        {favorites.map((favorite: Favorites) => (
          <Col xs="12" md="6" lg="4" key={favorite._id}>
            <FavoritesItem favorite={favorite} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoritesPage;