import React from 'react';
import ProjectCard from './ProjectCard';

const styles = {
  card: {
    backgroundColor: '#6289de',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    margin: '1rem',
    color: 'black'
  },
  pageTitle: {
    textDecoration: 'none',
  }
};

const renderProject = (project) => <ProjectCard {...project} />;

export default function Project(props) {
  console.log('Project plugged in');
  return (
    <body>
      <main>
        <div className='container' style={styles.body}>
          <h3 className='mt-5 mb-4' style={styles.pageTitle}> Deployed Projects</h3>
          <div className='container row flex-wrap'>
            {props.projects.map(renderProject)}
          </div>
        </div>
      </main>
    </body>
  );
};