import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './static/spline.css';

import Home from './components/Home'
import React, { useState, useEffect } from 'react';
import About from './components/About';

function App() {

  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      

      </Routes>
      <Routes>
      <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//<Spline scene="https://prod.spline.design/GY5N9MrvNiEkEH9H/scene.splinecode" />

//this one
//