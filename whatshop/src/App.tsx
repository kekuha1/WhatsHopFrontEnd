import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import ReviewsRoute from './components/ReviewsRoute';
import Glossary from './components/Glossary';
import { BreweryList } from './components/BreweryList';
import { BreweryDetail } from './components/BreweryDetail';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/brewerylist" element={<BreweryList />} />
        <Route path='/reviews/:id' element={<ReviewsRoute/>} />
        <Route path='/glossary' element={<Glossary/>} />
        <Route path='/brewerydetail/:id' element={<BreweryDetail />} />
        <Route path="*" element={<Navigate to={"/brewerylist"} />} />
      </Routes>
     </div>
  );
}

export default App;
