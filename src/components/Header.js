import React from 'react';

const styles = {
  header: {
    backgroundColor: '#6472ff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    margin: '2rem'
  },
  links: {
    color: 'black',
    margin: '1rem'
  },

};

export default function Header() {
  console.log('Header plugged in');
  return (
    <header style={styles.header} className='container'>
      <h1 style={styles.heading}>Devon Faria</h1>
      <nav>
        <a href='/' style={styles.links}>About Me</a>
        <a href='/' style={styles.links}>Portfolio</a>
        <a href='/' style={styles.links}>Contact</a>
        <a href='/' style={styles.links}>Resume</a>
      </nav>
    </header>
  )
};