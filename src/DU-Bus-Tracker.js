/* DU-Bus-Tracker.js */
import React, { useState } from 'react';
import app_logo from './logo/octagon.png'; // Adjust the paths accordingly
import du_logo from './logo/du_logo.png';
import './ProjectCardStyle.css';
import { SocialIcon } from 'react-social-icons';

const DU_Bus_Tracker = () => {
  const projectData = {
    title: 'DU Bus Tracker',
    description:`Application Development Lab Project 2-2: "DU BUS TRACKER" – A Bus Community for Dhaka University Students.
      This app is built with the main purpose of helping students of the University of Dhaka with their need to look up the university buses’ destinations and current positions. 
      We hope that this will serve as a useful tool to navigate through the bus list to find the perfect bus to go from one destination to another. 
      The app features quite a few useful features other than just looking up bus locations and names.`,
};


  const [iconColors, setIconColors] = useState({
    github: 'grey',
    youtube: 'grey',
  });

  const handleMouseEnter = (icon) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [icon]: getHoverColor(icon),
    }));
  };

  const handleMouseLeave = (icon) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [icon]: 'grey',
    }));
  };

  const getHoverColor = (icon) => {
    switch (icon) {
      case 'github':
        return '#0D0D0D';
      case 'youtube':
        return '#CD201F';
      default:
        return 'grey';
    }
  };

  return (
    <div className="project-card">
      <div className="images-section">
        <div className="image-container">
          <img src={du_logo} alt="Project Image 1" className="project-image" />
        </div>
        <div className="image-container">
          <img src={app_logo} alt="Project Image 2" className="project-image" />
        </div>
      </div>
      <div className="social-links">
        <SocialIcon
          style={{ height: 20, width: 20, cursor: 'pointer' }}
          className="custom-class"
          bgColor={iconColors.github}
          url="https://github.com/ignite312/DU-Bus-Tracker"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={() => handleMouseLeave('github')}
        />
        <SocialIcon
          style={{ height: 20, width: 20, cursor: 'pointer' }}
          className="custom-class"
          bgColor={iconColors.youtube}
          url="https://www.youtube.com/watch?v=xXtqRQ9cYj8"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('youtube')}
          onMouseLeave={() => handleMouseLeave('youtube')}
        />
      </div>
      <div className="description-section">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
      </div>
    </div>
  );
};

export default DU_Bus_Tracker;
