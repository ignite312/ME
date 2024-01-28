// AtCoderInfo.js
import React, { useState, useEffect } from 'react';
import atcoderLogo from './logo/atcoder.png';
import './CardStyle.css';

const AtCoderInfo = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const handle = 'ignite312';
      const userInfoUrl = `https://kenkoooo.com/atcoder/atcoder-api/v3/user_info?user=${handle}`;
      const submissionsUrl = `https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=${handle}&from_second=1560046356`;

      try {
        // Fetch user info
        const userInfoResponse = await fetch(userInfoUrl);
        if (!userInfoResponse.ok) {
          throw new Error(`HTTP error! Status: ${userInfoResponse.status}`);
        }
        const userInfoData = await userInfoResponse.json();

        // Fetch user submissions
        const submissionsResponse = await fetch(submissionsUrl);
        if (!submissionsResponse.ok) {
          throw new Error(`HTTP error! Status: ${submissionsResponse.status}`);
        }
        const submissionsData = await submissionsResponse.json();

        if (userInfoData && submissionsData) {
          const acceptedSubmissions = submissionsData.filter(submission => submission.result === 'AC');
          const totalAcceptedProblems = new Set(acceptedSubmissions.map(submission => submission.problem_id)).size;

          setUserDetails({
            ...userInfoData,
            totalAcceptedProblems,
          });
        } else {
          console.error('No data received from AtCoder API.');
        }
      } catch (error) {
        console.error('Error fetching AtCoder data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <a href="https://atcoder.jp/users/ignite312" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <h3>AtCoder </h3>
        <img src={atcoderLogo} alt="AtCoder Logo" className="logo" />
        {userDetails && (
          <div className="card-content">
            <h2>Handle: {userDetails.user_id}</h2>
            <div style={{ color: 'green' }}>
              <span style={{ color: 'black' }}>Total Accepted Problems: </span>
              <strong>{userDetails.totalAcceptedProblems}</strong>
            </div>
            <p>Rated Point Sum: {userDetails.rated_point_sum}</p>
          </div>
        )}
      </a>
    </div>
  );
};

export default AtCoderInfo;
