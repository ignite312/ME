// App.js

import spectre from './logo/spectre.jpg';
import './App.css';
import DU_Bus_Tracker from './DU-Bus-Tracker';
import HorizontalCardLayout from './HorizontalCardLayout';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spectre} className="App-logo" alt="logo" />
        <p className="App-main-text">Will add some CP stuff Later</p>
        <a
          className="App-link"
          href="https://codeforces.com/profile/Tspectre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on CF...
        </a>
      </header>
      <HorizontalCardLayout />
      <DU_Bus_Tracker/>
      <Footer />
    </div>
    
  );
}

export default App;
