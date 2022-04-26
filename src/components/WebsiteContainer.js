import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import ContactForm from './pages/ContactForm';
import Footer from './Footer';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    link: 'https://github.com/devonfaria/react-portfolio',
    imgLink: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    link: 'https://github.com/devonfaria/react-portfolio',
    imgLink: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    link: 'https://github.com/devonfaria/react-portfolio',
    imgLink: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
  },
  {
    id: 4,
    title: 'Project 4',
    link: 'https://github.com/devonfaria/react-portfolio',
    imgLink: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
  },
  {
    id: 5,
    title: 'Project 5',
    link: 'https://github.com/devonfaria/react-portfolio',
    imgLink: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
  },
  {
    id: 6,
    title: 'Project 6',
    link: 'https://github.com/devonfaria/react-portfolio',
    imgLink: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
  }
];

export default function WebsiteContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <ContactForm />;
    }
    if (currentPage === 'Resume') {
      return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header
        handlePageChange={handlePageChange} renderPage={renderPage}
        currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </>
  )
};