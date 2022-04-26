import React from 'react';
import NavItem from './NavItem'

const pages = ["About", "Portfolio", "Contact"];

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
      <a href='https://drive.google.com/file/d/1esn7-4dgYxx4vjljA5vWsZJLB3u3w-fs/view?usp=sharing' target="_blank">Resume</a>
    </nav>
  )
};

