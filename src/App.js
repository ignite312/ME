// App.js

import spectre from './spectre.jpg';
import './App.css';
import CodeforcesInfo from './CodeforcesInfo';
import GitHubInfo from './GitHubInfo';
import AtcoderInfo from './AtcoderInfo';

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
        <div className="card-container">
        <GitHubInfo />
        <CodeforcesInfo />
        <AtcoderInfo />
      </div>
      </header>
    </div>
  );
}

export default App;
