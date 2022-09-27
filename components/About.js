
import Spline from '@splinetool/react-spline';
import Header from './Header';
import Main from './Main';
import main from '../static/images/main.png'
import React, { useState, useEffect } from 'react';
const About = () => {
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
    <div>
        <Header/>
    <img className='vizx' src={main}></img>
    <Spline scene="https://prod.spline.design/AxDVJGdNbKqLlVbe/scene.splinecode" />

    <Main/>
    </div>
  )
}

export default About