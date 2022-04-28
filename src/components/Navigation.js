import React from 'react';
import NavItem from './NavItem'

// Page names array for dynamic button creation
const pages = ["About", "Portfolio", "Contact", "Resume"];

// Button container HTML that maps over page array for generating buttons
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar'>
      {pages.map(page => (
        <NavItem
          key={page}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          page={page}
        />
      ))}
    </nav>
  )
};

