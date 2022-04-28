import React from 'react';
import Navigation from './Navigation';

// Header HTML which calls Navigation shell
export default function Header({ currentPage, handlePageChange, renderPage }) {
  return (
    <header>
      <h1 className='heading'>Devon Faria</h1>
      <Navigation
        handlePageChange={handlePageChange} renderPage={renderPage}
        currentPage={currentPage} />
    </header>
  )
};