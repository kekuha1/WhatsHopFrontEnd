import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import ReviewsRoute from "./components/ReviewsRoute";
import Glossary from "./components/Glossary";
import { BreweryList } from "./components/BreweryList";
import { BreweryDetail } from "./components/BreweryDetail";
import ProfileRoute from "./components/ProfileRoute";
import AuthContextProvider from "./context/AuthContextProvider";
import FavoritesRoute from "./components/FavoritesRoute";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Articles from "./articles/Articles";
import Ireland from "./articles/ArticlesContent/Ireland";

function App() {
  const { user } = useContext(AuthContext);
  const userId = user?.uid || null;

  return (
    <div className="App">
      <AuthContextProvider>
        <FavoritesContextProvider userId={userId ?? ""}>
        <Header />
        <Routes>
          <Route path="/brewerylist" element={<BreweryList />} />
          <Route path="/reviews/:id" element={<ReviewsRoute />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/brewerydetail/:id" element={<BreweryDetail />} />
          <Route path="*" element={<Navigate to={"/brewerylist"} />} />
          <Route path="/profile" element={<ProfileRoute />} />
          <Route path="/Favorites" element={<FavoritesRoute />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path='/Articles/ArticlesContent/Ireland' element={<Ireland/>} />
        </Routes>
        </FavoritesContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
