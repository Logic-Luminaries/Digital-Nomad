// MainPage.js
import React from 'react';
import './mainpage.css'; // Import your CSS file
import Login from './login';
import './login.css';
import Register from './register';
import './register.css';

function MainPage   (){
  return (
    <div className="main-page">
        <Login />
        <Register />
    </div>
  );
};

export default MainPage;
