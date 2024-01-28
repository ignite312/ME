import React, { useState, useEffect } from 'react';
import './App.css';
import './Styles.css';
import githubLogo from './logo/github.png';

const GitHubInfo = () => {
  const [githubData, setGithubData] = useState(null);

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

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="card">
      <h3>GitHub</h3>
      <img src={githubLogo} alt="GitHub Logo" className="logo" />
      {githubData && (
        <div className="card-content">
          <h2>Handle: {githubData.login}</h2>
          <div style={{ color: 'green' }}>
            <span style={{ color: 'black' }}>Contribution Count: </span>
            <strong>{'500+(2023)'}</strong>
          </div>
          <p>Public Repositories: {githubData.public_repos}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <p>Followers: {githubData.followers}</p>
            <p>Following: {githubData.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubInfo;
