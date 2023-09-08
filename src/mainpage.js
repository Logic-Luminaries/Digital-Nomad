// MainPage.js
import React from 'react';
import Login from './login';
import Header from './header';
import Header2 from './header2';
import PropertyListings from './propertyListings';
import './mainpage.css'; //To style between components

function MainPage   (){
  return (
    <div className="main-page">
      <Header />
      <Header2 />
      <PropertyListings />

    </div>
  );
};

export default MainPage;
