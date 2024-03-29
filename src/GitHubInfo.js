// GitHubInfo.js
import React, { useState, useEffect } from 'react';
import githubLogo from './logo/github.png';
import './CardStyle.css';

const GitHubInfo = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const userApiUrl = 'https://api.github.com/users/ignite312';

      try {
        const userResponse = await fetch(userApiUrl);

        if (!userResponse.ok) {
          throw new Error(`GitHub API request failed: ${userResponse.statusText}`);
        }

        const userData = await userResponse.json();

        setGithubData({
          login: userData.login,
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="card">
      <a href="https://github.com/ignite312" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

        <h3>GitHub</h3>
        <img src={githubLogo} alt="GitHub Logo" className="logo" />
        {githubData && (
          <div className="card-content">
            <h2>Handle: {githubData.login}</h2>
            <div style={{ color: 'green' }}>
              <span style={{ color: 'black' }}>Contribution Count: </span>
              <strong>{'500+'}</strong>
            </div>
            <p>Public Repositories: {githubData.public_repos}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <p>Followers: {githubData.followers}</p>
              <p>Following: {githubData.following}</p>
            </div>
          </div>
        )}
      </a>
    </div>

  );
};

export default GitHubInfo;
