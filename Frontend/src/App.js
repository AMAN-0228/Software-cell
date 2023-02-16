import React from 'react';
import './App.css';

import "./animation.css";
import Navbar from './Universal/Navbar'
import Footer from './Universal/Footer'
import Particle from './Component/Particle'

function App() {
  return (
   <div>
    <Navbar/>
    <Particle/>
  
    {/* <Footer/> */}
   </div>
  );
}

export default App;
