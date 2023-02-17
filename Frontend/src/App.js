import React from 'react';
import './App.css';

import "./animation.css";
import Navbar from './Universal/Navbar'
import Footer from './Universal/Footer'
import Particles from './Component/Particles'

function App() {
  return (
   <div>
    <Navbar/>
    <Particles/>
  
    {/* <Footer/> */}
   </div>
  );
}

export default App;
