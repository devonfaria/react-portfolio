import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

// Exports Footer HTML
export default function Footer() {
  return (
    <>
      <footer>
        <nav>
          <a href='mailto:devonfaria@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
          </a>
          <a href='https://github.com/devonfaria' target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon className='icon' icon={faGithubSquare} />
          </a>
          <a href='https://www.linkedin.com/in/devon-faria/' target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon className='icon' icon={faLinkedin} />
          </a>
        </nav>
      </footer>
    </>
  )
};