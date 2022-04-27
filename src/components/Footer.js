import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const styles = {
  footer: {
    backgroundColor: '#6289de',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
  },
  icon: {
    margin: '1rem',
    padding: '1rem',
    height: '40px',
    textDecoration: 'none',
    color: 'white',
  }
};

export default function Footer() {
  console.log('Footer plugged in');
  return (
    <>
      <footer style={styles.footer} >
        <nav>
          <a href='mailto:devonfaria@gmail.com' ><FontAwesomeIcon style={styles.icon} icon={faEnvelope} /></a>
          <a href='https://github.com/devonfaria' target="_blank"><FontAwesomeIcon style={styles.icon} icon={faGithubSquare} /></a>
          <a href='https://www.linkedin.com/in/devon-faria/' target="_blank"><FontAwesomeIcon style={styles.icon} icon={faLinkedin} /></a>
        </nav>
      </footer>
    </>
  )
};