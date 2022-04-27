import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import ContactForm from './pages/ContactForm';
import Footer from './Footer';

const projects = [
  {
    id: 1,
    title: 'Social Network API',
    link: 'https://github.com/devonfaria/social-network-api',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651021561/Portfolio/Screen_Shot_2022-04-26_at_9.04.54_PM_spwxno.png',
    description: 'A back-end database that links users, thoughts, and reactions.',
    ghLink: 'https://github.com/devonfaria/social-network-api'
  },
  {
    id: 2,
    title: 'Housable',
    link: 'https://hidden-earth-95543.herokuapp.com/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018802/Portfolio/Housable_qulofq.png',
    description: 'A forum for vacationers to find house-sitters.',
    ghLink: 'https://github.com/devonfaria/housable'
  },
  {
    id: 3,
    title: 'Traxx - Music Search Software',
    link: 'https://devonfaria.github.io/traxx/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018519/Portfolio/Traxx-Music-Search-Software_alsial.png',
    description: 'A comprehensive music search platform using Musixmatch API.',
    ghLink: 'https://github.com/devonfaria/traxx'
  },
  {
    id: 4,
    title: 'E-Commerce Back-End',
    link: 'https://github.com/devonfaria/ecommerce-backend',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651021913/Portfolio/ecommerce_sxwsmg.png',
    description: 'The database for your online store powered by MySql.',
    ghLink: 'https://github.com/devonfaria/ecommerce-backend'
  },
  {
    id: 5,
    title: 'Tech Blog',
    link: 'https://shrouded-temple-24617.herokuapp.com/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018886/Portfolio/Tech-Blog_ctzjub.png',
    description: 'A blog forum with user reactions that requires user credentials.',
    ghLink: 'https://github.com/devonfaria/tech-blog'
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    link: 'https://devonfaria.github.io/weather-application/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018513/Portfolio/Weather-Application_g5tkdq.png',
    description: 'Weather Dashboard for user-searched cities using Open Weather API.',
    ghLink: 'https://github.com/devonfaria/weather-application'
  }
];

export default function WebsiteContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Project projects={projects} />;
    }
    if (currentPage === 'Contact') {
      return <ContactForm />;
    }
    if (currentPage === 'Resume') {
      window.open('https://drive.google.com/file/d/1esn7-4dgYxx4vjljA5vWsZJLB3u3w-fs/view?usp=sharing', '_blank')
      return <AboutMe />;
    }
    return <AboutMe />;
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