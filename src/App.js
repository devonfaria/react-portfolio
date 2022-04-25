import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

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

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <AboutMe />
      <Project projects={projects} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
