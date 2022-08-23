import logo from './logo.svg';
import './App.css';
import './static/spline.css';
import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import Main from './components/Main';
import main from './static/images/main.png'
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    var timer = setInterval(function() {
      
      if(document.querySelector("#root > canvas").style.display!='none'){
        document.querySelector("#root > img").style.display='none';
        clearInterval(timer);
      } 
      
      console.log("I'm here"); //this will still run after clearing
    }, 200);
    
  },[]);
  
  
  return (
    <>
    <Header/>
    <img className='vizx' src={main}></img>
    <Spline scene="https://prod.spline.design/AxDVJGdNbKqLlVbe/scene.splinecode" />

    <Main/>
    </>
  );
}

export default App;
//<Spline scene="https://prod.spline.design/GY5N9MrvNiEkEH9H/scene.splinecode" />

//this one
//