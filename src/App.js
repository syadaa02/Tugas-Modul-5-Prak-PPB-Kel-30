import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { FaStar } from 'react-icons/fa'; // Icon for Top
import { AiFillHeart } from 'react-icons/ai'; // Icon for Favorite
import './App.css';
import Movie from './pages/Movie'; // Home page
import Profile from './pages/Profile'; // Profile page
import Favorit from './pages/Favorite'; // Favorite page
import Top from './pages/Top'; // Top page
import MovieDetail from './pages/MovieDetail'; // Movie Detail page
import TopDetail from './pages/TopDetail'; // Top Detail page
import Login from './pages/Login'; // Login page

function App() {
  // Cek status login di localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Fungsi untuk login
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Simpan status login
  };

  // Fungsi untuk logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Hapus status login
  };

  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 30</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Movie /> : <Navigate to="/login" />}
        /> {/* Home page */}
        <Route
          path="/top"
          element={isAuthenticated ? <Top /> : <Navigate to="/login" />}
        /> {/* Top page */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        /> {/* Profile page */}
        <Route
          path="/favorit"
          element={isAuthenticated ? <Favorit /> : <Navigate to="/login" />}
        /> {/* Favorite page */}
        <Route
          path="/movie/:id"
          element={isAuthenticated ? <MovieDetail /> : <Navigate to="/login" />}
        /> {/* Movie Detail page */}
        <Route
          path="/top/:id"
          element={isAuthenticated ? <TopDetail /> : <Navigate to="/login" />}
        /> {/* Top Detail page */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
        />
      </Routes>

      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          backgroundColor: "#444",
          color: "white",
        }}
      >
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" /> Home
        </NavLink>
        <NavLink to="/top" className="iconWrapper">
          <FaStar className="icon" /> Top
        </NavLink>
        <NavLink to="/favorit" className="iconWrapper">
          <AiFillHeart className="icon" /> Favorit
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
        {isAuthenticated && (
          <button onClick={handleLogout} style={{ background: 'none', color: 'white', border: 'none' }}>
            Logout
          </button>
        )}
      </footer>
    </BrowserRouter>
  );
}

export default App;