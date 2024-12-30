import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Home from './components/Home';
import Banner from './components/Banner';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  const [watchList, setWatchList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleAddToWatchList = (movieObj) => {
    const newWatchList = [...watchList, movieObj];
    localStorage.setItem('Filmvault', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const index = watchList.findIndex(movie => movie.id === movieObj.id);
    
    if (index !== -1) {
      const updatedWatchList = [...watchList];
      updatedWatchList.splice(index, 1);
      setWatchList(updatedWatchList);
      localStorage.setItem('Filmvault', JSON.stringify(updatedWatchList));
    }
  };

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('Filmvault');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  // Private route component
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      {/* Conditionally render NavBar based on login status */}
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route path="/LoginPage" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        
        {/* Protecting routes */}
        <Route path="/Movies" element={
          <PrivateRoute>
            <>
              <Banner />
              <Movies handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchList={watchList} />
            </>
          </PrivateRoute>
        } />
        <Route path="/Watchlist" element={
          <PrivateRoute>
            <Watchlist watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchlist} />
          </PrivateRoute>
        } />
        <Route path="/Home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;