import React from 'react';
import ProjectCard from './ProjectCard';

const styles = {
  body: {
    display: 'flex',
    backgroundColor: 'red'
  },
  card: {
    backgroundColor: '#6289de',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    margin: '1rem',
    color: 'black'
  }
};

const renderProject = (project) => <ProjectCard {...project} />;

export default function Project(props) {
  console.log('Project plugged in');
  return (
    <body>
      <main>
        <div className='container' style={styles.body}>
          <h3>Projects</h3>
          <div>
            {props.projects.map(renderProject)}
          </div>
        </div>
      </main>
    </body>
  );
};