// App.js

import React from 'react';
import './App.css';
import Header from './Header'; // Import the Header component
import DU_Bus_Tracker from './DU-Bus-Tracker';
import HorizontalCardLayout from './HorizontalCardLayout';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="center-container">
        <h3>My Competitive Programming Stat</h3>
      </div>
      <HorizontalCardLayout />
      <div className="center-container">
        <h3>Academic Project</h3>
      </div>
      <DU_Bus_Tracker />
      <Footer />
    </div>
  );
}

export default App;
