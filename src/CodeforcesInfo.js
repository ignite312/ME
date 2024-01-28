import React, { useState, useEffect } from 'react';
import './App.css';
import './Styles.css';
import codeforcesLogo from './logo/cf.png'; // Replace with the actual file path of your Codeforces logo

const CodeforcesInfo = () => {
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [okProblemIds, setOkProblemIds] = useState(new Set());
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch Codeforces data and update the state
    const fetchData = async () => {
      const handle = 'Tspectre';

      // Example URL for recent submissions
      const submissionsUrl = `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=833714451`;
      // Example URL for user information
      const userInfoUrl = `https://codeforces.com/api/user.info?handles=${handle}`;

      try {
        // Fetch recent submissions data
        const submissionsResponse = await fetch(submissionsUrl);
        const submissionsData = await submissionsResponse.json();

        // Fetch user information data
        const userInfoResponse = await fetch(userInfoUrl);
        const userInfoData = await userInfoResponse.json();

        // Check if both API requests were successful
        if (submissionsData.status === 'OK' && userInfoData.status === 'OK') {
          // Update state with the recent submissions data
          setCodeforcesData(submissionsData.result);

          // Count the number of unique problem IDs for submissions with verdict "OK"
          const okSubmissions = submissionsData.result.filter(submission => submission.verdict === 'OK');
          const uniqueProblemIds = new Set(okSubmissions.map(submission => submission.problem.contestId + submission.problem.index));
          setOkProblemIds(uniqueProblemIds);

          // Update state with user details
          setUserDetails(userInfoData.result[0]);
        } else {
          console.error('Codeforces API request failed.');
        }
      } catch (error) {
        console.error('Error fetching Codeforces data:', error);
      }
    };

    fetchData();
  }, []);

  // ... (existing code)

  return (
    <div className="card">
      <h3>Codeforces </h3>
      <img src={codeforcesLogo} alt="Codeforces Logo" className="logo" />
      {codeforcesData && userDetails && (
        <div className="card-content">
          <h2 className="rank-container" style={{ color: '#1DE7E7' }}>
              <span style={{ color: 'black' }}>Handle: </span>
              <strong>{userDetails.handle}</strong>
            </h2>
          <div style={{ color: 'green' }}>
              <span style={{ color: 'black' }}>Accepted Problem: </span>
              <strong>{okProblemIds.size}</strong>
            </div>
          {userDetails.rank === 'specialist' ? (
            <div className="rank-container" style={{ color: '#1DE7E7' }}>
              <span style={{ color: 'black' }}>Rank: </span>
              <strong>{userDetails.rank.charAt(0).toUpperCase() + userDetails.rank.slice(1)}</strong>
            </div>
          ) : (
            <p style={{ color: 'black' }}>Rank: {userDetails.rank.charAt(0).toUpperCase() + userDetails.rank.slice(1)}</p>
          )}
          <p>Ratings: {userDetails.rating}</p>
          <p>Friends: {userDetails.friendOfCount}</p>
        </div>
      )}
    </div>
  );

};

export default CodeforcesInfo;
