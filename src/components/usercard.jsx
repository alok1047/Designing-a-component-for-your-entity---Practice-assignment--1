import React from 'react';

const Usercard = () => {
  const profilePhoto = 'src/assets/photo.jpeg';
  const name = 'Alok Agrahari';
  const email = 'alok.agrahari.s64@kalvium.community';
  const phone = '+91 9140739958';
  const address = 'jaipur rajasthan';

  return (
    <div style={styles.card}>
      <img 
        src={profilePhoto} 
        alt="Profile" 
        style={styles.profileImage} 
      />
      <h2 style={styles.name}>{name}</h2>
      <div style={styles.details}>
        <p style={styles.detailItem}>📧 {email}</p>
        <p style={styles.detailItem}>📱 {phone}</p>
        <p style={styles.detailItem}>🏠 {address}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    maxWidth: '300px',
    margin: '16px',
    textAlign: 'center',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'translateY(-4px)'
    }
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '16px',
    border: '3px solid #e0e0e0'
  },
  name: {
    margin: '0 0 12px 0',
    color: '#333333',
    fontSize: '1.5em'
  },
  details: {
    textAlign: 'left',
    lineHeight: '1.6'
  },
  detailItem: {
    margin: '8px 0',
    color: '#666666',
    fontSize: '0.95em'
  }
};

export default Usercard;