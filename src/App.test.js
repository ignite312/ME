// App.js

import spectre from './spectre.jpg';
import './App.css';
import CodeforcesInfo from './CodeforcesInfo';
import GitHubInfo from './GitHubInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spectre} className="App-logo" alt="logo" />
        <p>Will add some CP stuff Later</p>
        <a
          className="App-link"
          href="https://codeforces.com/profile/Tspectre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on CF...
        </a>
      </header>

      <div className="card-container">
        <CodeforcesInfo />
        <GitHubInfo />
      </div>
    </div>
  );
}

export default App;
