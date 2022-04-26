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
          <a href='mailto:devonfaria@gmail.com' style={styles.imgLinks}><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href='https://github.com/devonfaria' style={styles.imgLinks}><FontAwesomeIcon icon={faGithubSquare} /></a>
          <a href='https://www.linkedin.com/in/devon-faria/' style={styles.imgLinks}><FontAwesomeIcon icon={faLinkedin} /></a>
        </nav>
      </footer>
    </div>
  )
};