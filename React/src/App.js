import logo from './logo.svg';
import axios from "axios";
import React, { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from './component/home/Navbar.js';
import Header from './component/home/Header.js';
import Intro from './component/home/Intro.js';
import Footer from './component/home/Footer.js';
// import Gallery from './component/Gallery.js';
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Intro/>
      {/* <Review/> */}
      <Footer/>

      {/* <Reservation/> */}
      </>
  );
}
export default App;
