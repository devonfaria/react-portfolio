import React from 'react';
import NavItem from './NavItem'

const pages = ["About", "Portfolio", "Contact", "Resume"];

const styles = {
  link: {
    margin: '20px',
    fontSize: '25px',
    textDecoration: 'none',
    color: 'white',
  }
};

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

