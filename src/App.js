// App.js

import spectre from './logo/spectre.jpg';
import './App.css';
import CodeforcesInfo from './CodeforcesInfo';
import GitHubInfo from './GitHubInfo';
import AtcoderInfo from './AtcoderInfo';
import Octagon from './Octagon';
import Contest from './Contest';
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
      <p className="Title"> Competitive Programming Statistics</p>
      <div className="card-container">
        <GitHubInfo />
        <CodeforcesInfo />
        <AtcoderInfo />

      </div>
      <p className="Title">My Academic Project</p>
      <div>
        <Octagon/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
