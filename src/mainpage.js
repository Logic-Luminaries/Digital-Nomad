// MainPage.js
import React from 'react';
import Login from './login';
import Header from './header';
import Header2 from './header2';
import './mainpage.css'; //To style between components

function MainPage   (){
  return (
    <div className="main-page">
      <Header />
      <Header2 />

    </div>
  );
};

export default MainPage;