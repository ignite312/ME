// HorizontalCardLayout.js
import React from 'react';
import GitHubInfo from './GitHubInfo';
import CodeforcesInfo from './CodeforcesInfo';
import AtCoderInfo from './AtCoderInfo';
import './HorizontalCardLayout.css';

const HorizontalCardLayout = () => {
  return (
    <div className="horizontal-card-layout">
      <CodeforcesInfo />
      <GitHubInfo />
      <AtCoderInfo />
    </div>
  );
};

export default HorizontalCardLayout;
