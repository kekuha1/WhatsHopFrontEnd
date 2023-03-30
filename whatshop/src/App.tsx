import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import ReviewsRoute from './components/ReviewsRoute';
import Glossary from './components/Glossary';
import { BreweryList } from './components/BreweryList';
import { BreweryDetail } from './components/BreweryDetail';
import ProfileRoute from './components/ProfileRoute';
import AuthContextProvider from './context/AuthContextProvider';
import { UserScreen } from './components/Userscreen';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/brewerylist" element={<BreweryList />} />
        <Route path='/reviews/:id' element={<ReviewsRoute/>} />
        <Route path='/glossary' element={<Glossary/>} />
        <Route path='/brewerydetail/:id' element={<BreweryDetail />} />
        <Route path="*" element={<Navigate to={"/brewerylist"} />} />
        <Route path="/profile" element={<ProfileRoute />} />
        </Routes>
        {/* <ProfileRoute/> */}
        <UserScreen/>
        </AuthContextProvider>
     </div>
  );
}

export default App;
