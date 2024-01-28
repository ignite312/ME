// CodeforcesInfo.js
import React, { useState, useEffect } from 'react';
import codeforcesLogo from './logo/cf.png';
import './CardStyle.css';

const CodeforcesInfo = () => {
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [okProblemIds, setOkProblemIds] = useState(new Set());
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const handle = 'Tspectre';
      const submissionsUrl = `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=833714451`;
      const userInfoUrl = `https://codeforces.com/api/user.info?handles=${handle}`;

      try {
        const submissionsResponse = await fetch(submissionsUrl);
        const submissionsData = await submissionsResponse.json();

        const userInfoResponse = await fetch(userInfoUrl);
        const userInfoData = await userInfoResponse.json();

        if (submissionsData.status === 'OK' && userInfoData.status === 'OK') {
          setCodeforcesData(submissionsData.result);

          const okSubmissions = submissionsData.result.filter(submission => submission.verdict === 'OK');
          const uniqueProblemIds = new Set(okSubmissions.map(submission => submission.problem.contestId + submission.problem.index));
          setOkProblemIds(uniqueProblemIds);

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

  return (

    <div className="card">
      <a href="https://codeforces.com/profile/Tspectre" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
      </a>
    </div>
  );
};

export default CodeforcesInfo;
