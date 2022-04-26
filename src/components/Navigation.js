import React from 'react';
import NavItem from './NavItem'

const pages = ["About", "Portfolio", "Contact", "Resume"];

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
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

