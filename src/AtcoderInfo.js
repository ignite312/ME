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

      try {
        const userInfoResponse = await fetch(userInfoUrl);

        if (!userInfoResponse.ok) {
          throw new Error(`HTTP error! Status: ${userInfoResponse.status}`);
        }

        const userInfoData = await userInfoResponse.json();

        if (userInfoData) {
          setUserDetails(userInfoData);
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
        <img src={atcoderLogo} alt="Codeforces Logo" className="logo" />
        {userDetails && (
          <div className="card-content">
            <h2>Handle: {userDetails.user_id}</h2>
            <div style={{ color: 'green' }}>
              <span style={{ color: 'black' }}>Accepted Problem: </span>
              <strong>{userDetails.accepted_count}</strong>
            </div>
            <p>Rated Point Sum: {userDetails.rated_point_sum}</p>
          </div>
        )}
      </a>
    </div>
  );
};

export default AtCoderInfo;
