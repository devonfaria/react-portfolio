import React from 'react';

const NavItem = ({ currentPage, page, handlePageChange }) => {
  return (
    <a
      href={`#${page.toLowerCase()}`}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </a>
  );
};

export default NavItem;