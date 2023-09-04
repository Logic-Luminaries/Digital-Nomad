// MainPage.js
import React from 'react';
import Login from './login';
import Header from './header';
import './mainpage.css'; //To style between components

function MainPage   (){
  return (
    <div className="main-page">
      <Header />
      <Login />

    </div>
  );
};

export default MainPage;
