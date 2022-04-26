import React from 'react';
import Navigation from './Navigation';

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

export default function Header({ currentPage, handlePageChange, renderPage }) {
  console.log('Header plugged in');
  return (
    <header style={styles.header} className='container'>
      <h1 style={styles.heading}>Devon Faria</h1>
      <Navigation
        handlePageChange={handlePageChange} renderPage={renderPage}
        currentPage={currentPage} />
    </header>
  )
};