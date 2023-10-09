import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./register"; // Will need to switch between pages
import Login from "./login"; // Will need to switch between pages
import MainPage from "./mainpage"; // Will need to switch between pages
import Map from "./map";

function App() {
  //const [loggedInUsers, setLoggedInUsers ] = useState([{username: "admin", password: "admin"}]);
  //Set initial state for logged in users in login page

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
