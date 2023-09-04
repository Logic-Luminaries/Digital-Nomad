import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './register'; // Will need to route between pages
import Login from './login'; // Will need to route between pages



function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

