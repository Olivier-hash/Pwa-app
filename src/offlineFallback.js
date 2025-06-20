import React from 'react';

const OfflineFallback = () => {
  return (
    <div style={styles.container}>
      <h1>You’re Offline</h1>
      <p>Please check your internet connection and try again.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default OfflineFallback;
