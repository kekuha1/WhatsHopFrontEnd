import { useParams, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BreweryList } from './BreweryList';
import { BreweryDetail } from './BreweryDetail'

export function DetailsRoute() {
    // let { id } = useParams();
    // let brewery = brewery.find((brewery => brewery.id === id)

  return (
    <Router>
      <Switch>
        <Route path="/BreweryList" element={<BreweryList/>}>
          <BreweryList />
        </Route>
        <Route path="/breweries/:id">
          <BreweryDetail />
        </Route>
        {/* <Route>
          ---reserved for Favorites List---
        </Route> */}
      </Switch>
    </Router>
  );
}

