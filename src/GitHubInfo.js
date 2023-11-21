/*
import React, { useState, useEffect } from 'react';
import './App.css';
import './Styles.css';
import githubLogo from './github.png'; // Replace with the actual file path of your Codeforces logo

const GitHubInfo = () => {
  const [githubData, setGithubData] = useState(null);

  const fetchGitHubData = async () => {
    const userApiUrl = 'https://api.github.com/users/ignite312';
    const graphqlApiUrl = 'https://api.github.com/graphql';
    const token = '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';

    try {
      const userResponse = await fetch(userApiUrl);
      const userData = await userResponse.json();

      if (!userResponse.ok) {
        throw new Error(`GitHub API request failed: ${userData.message}`);
      }

      const query = `
        query {
          viewer {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            login
            repositoriesContributedTo {
              totalCount
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
          }
        }
      `;

      const response = await fetch(graphqlApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (data.errors) {
        throw new Error(`GitHub GraphQL API request failed: ${data.errors[0].message}`);
      }

      setGithubData({
        login: userData.login,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        contributions: data.data.viewer.contributionsCollection.contributionCalendar.totalContributions,
        repositoriesContributedTo: data.data.viewer.repositoriesContributedTo.totalCount,
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
      <img src={githubLogo} alt="Codeforces Logo" className="logo" />
      {githubData && (
        <div className="card-content">
          <h2>Handle: {githubData.login}</h2>
          <div style={{ color: 'green' }}>
              <span style={{ color: 'black' }}>Contribution Count: </span>
              <strong>{'+'+ githubData.contributions}</strong>
            </div>
          <p>Public Repositories: {githubData.public_repos}</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p>Followers: {githubData.followers}</p>
            <p>Following: {githubData.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubInfo;
*/


import React, { useState, useEffect } from 'react';
import './App.css';
import './Styles.css';
import githubLogo from './github.png';

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
            <strong>{'++'}</strong>
            {/* <strong>{'+' + githubData.contributions}</strong> */}
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
