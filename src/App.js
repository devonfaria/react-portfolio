import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
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
  }
];

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Project projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
