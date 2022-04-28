import React from 'react';
import ProjectCard from './ProjectCard';

// Defining the function to render a project card to be mapped below
const renderProject = (project) => <ProjectCard {...project} />;

// Renders Project container and maps over project data for Project Cards component
export default function Project(props) {
  console.log('Project plugged in');
  return (
    <body>
      <main>
        <div className='container'>
          <h3 className='mt-5 mb-5' id='page-title'>Deployed Projects</h3>
          <div className='project-container container row'>
            {props.projects.map(renderProject)}
          </div>
        </div>
      </main>
    </body>
  );
};