import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#6289de',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLinks: {
    margin: '1rem',
    padding: '1rem',
    color: 'black',
  }
};

export default function Footer() {
  console.log('Footer plugged in');
  return (
    <div>
      <footer style={styles.footer}>
        <nav>
          <a href='/' style={styles.imgLinks}>Twitter</a>
          <a href='/' style={styles.imgLinks}>Github</a>
          <a href='/' style={styles.imgLinks}>LinkedIn</a>
        </nav>
      </footer>
    </div>
  )
};