import React from 'react';

// Nav Button HTML for header
const NavItem = ({ currentPage, page, handlePageChange }) => {
  return (
    <a
      href={`#${page.toLowerCase()}`}
      onClick={() => handlePageChange(page)}
      id='link'
      className={currentPage === page ? 'nav-link active' : 'nav-link'}
    >
      {page}
    </a>
  );
};

export default NavItem;