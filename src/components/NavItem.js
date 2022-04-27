import React from 'react';

const styles = {
  link: {
    margin: '20px',
    fontSize: '25px',
    textDecoration: 'none',
    color: 'white',
  }
};

const NavItem = ({ currentPage, page, handlePageChange, link }) => {
  return (
    <a
      style={styles.link}
      href={`#${page.toLowerCase()}`}
      onClick={() => handlePageChange(page)}
      className={currentPage === page ? 'nav-link active' : 'nav-link'}
    >
      {page}
    </a>
  );
};

export default NavItem;