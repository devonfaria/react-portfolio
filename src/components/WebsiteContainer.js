import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import ContactForm from './pages/ContactForm';
import Footer from './Footer';

const projects = [
  {
    id: 1,
    title: 'HobbyBox',
    link: 'https://agile-plateau-31401.herokuapp.com',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_scale,h_400,w_800/v1655397953/Portfolio/Hobby-Box-login_jjk9us.png',
    description: 'A subscription service for hobby-related boxes, powered by Stripe. Users can order, pay, and view shipping information for each transaction.',
    tech: 'JS / React / Stripe / Mongo / GraphQL / JWT / Tailwind CSS',
    ghLink: 'https://github.com/jacksonnorris/hobby-box'
  },
  {
    id: 2,
    title: 'Housable',
    link: 'https://hidden-earth-95543.herokuapp.com/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018802/Portfolio/Housable_qulofq.png',
    description: 'A forum for vacationers to find house-sitters. Those who create listings can add specific needs, such as tending to plants and pets that inhabit the home.',
    tech: 'JS / MySQL / Sequelize / BCrypt / Express / Cloudinary',
    ghLink: 'https://github.com/devonfaria/housable'
  },
  {
    id: 3,
    title: 'Traxx - Music Search Software',
    link: 'https://devonfaria.github.io/traxx/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018519/Portfolio/Traxx-Music-Search-Software_alsial.png',
    description: 'A comprehensive music search platform using Musixmatch API. Find covers, alternative versions, and music videos all in one place.',
    tech: 'HTML / CSS / JS / MusixMatch and YouTube API',
    ghLink: 'https://github.com/devonfaria/traxx'
  },
  {
    id: 4,
    title: 'E-Commerce Back-End',
    link: 'https://github.com/devonfaria/ecommerce-backend',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651021913/Portfolio/ecommerce_sxwsmg.png',
    description: 'The database for your online store, powered by MySQL. Simple to use backend template, ready for front-end integration.',
    tech: 'JS / MySQL / Sequelize / Node.js / DOTENV / Express',
    ghLink: 'https://github.com/devonfaria/ecommerce-backend'
  },
  {
    id: 5,
    title: 'Social Network API',
    link: 'https://github.com/devonfaria/social-network-api',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651021561/Portfolio/Screen_Shot_2022-04-26_at_9.04.54_PM_spwxno.png',
    description: 'A back-end database that links users, thoughts, and reactions in a social media platform. All information is stored using MongoDB.',
    tech: 'JS / Mongo / Mongoose / Express',
    ghLink: 'https://github.com/devonfaria/social-network-api'
  },
  {
    id: 6,
    title: 'Tech Blog',
    link: 'https://shrouded-temple-24617.herokuapp.com/',
    imgLink: 'https://res.cloudinary.com/dfamiaufc/image/upload/c_fill,h_400,w_800/v1651018886/Portfolio/Tech-Blog_ctzjub.png',
    description: 'A blog forum with user reactions that requires user credentials, and encrypts user information upon sign-up for cybersecurity purposes.',
    tech: 'JS / MySQL / Sequelize / Handlebars / BCrypt / DOTENV',
    ghLink: 'https://github.com/devonfaria/tech-blog'
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
      window.open('https://drive.google.com/file/d/1g0kFcCbcJi-EsKLR6gDg0BgnqrH6-wTK/view?usp=sharing', '_blank')
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