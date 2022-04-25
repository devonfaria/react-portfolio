import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#6289de',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default function Footer() {
  console.log('Footer plugged in');
  return (
    <div>
      <footer style={styles.footer}>
        <h5>Devon Faria 2022</h5>
      </footer>
    </div>
  )
};