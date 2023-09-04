import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './register'; // Will need to switch between pages
import Login from './login'; // Will need to switch between pages
import MainPage from './mainpage'; // Will need to switch between pages



function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;

