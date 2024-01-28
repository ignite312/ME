import React from 'react';
import octagon from './logo/octagon.png';

const Octagon = ({ imageName, imageUrl, description }) => {
  const styles = {
    cardContainer: {
      display: 'flex',
      justifyContent: 'center', /* Center the cards horizontally */
      margin: '10px 20px', /* Adjust the top and bottom margin as needed */
    },
    card: {
      backgroundColor: 'white',
      padding: '33px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      height: '350px',
      width: '1000px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '0 10px', /* Adjust the margin between cards as needed */
      display: 'flex',
    },
    leftSide: {
      flex: '1',
      padding: '20px',
    },
    rightSide: {
      flex: '2',
      padding: '20px',
      backgroundColor: '#f8f8f8', /* Optional background color for the right side */
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    imageName: {
      marginTop: '10px',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <div style={styles.leftSide}>
          <img src={octagon} alt={imageName} style={styles.image} />
          <p style={styles.imageName}>{imageName}</p>
        </div>
        <div style={styles.rightSide}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Octagon;
