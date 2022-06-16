import React from 'react'

// This is the template that generates project cards on the Projects tab, given the data passed to it from WebsiteContainer projects array
const ProjectCard = (props) => {
  return (
    <div key={props.id} className="card col-lg-6 col-md-12 shadow p-3 mb-5 rounded">
      <a href={props.link} target="_blank" rel='noreferrer noopener'>
        <img className='card-img-top' src={props.imgLink} alt='project webpage'></img>
      </a>
      <h3 className="project-header mb-4">
        <a href={props.link} id='link' target="_blank" rel='noreferrer noopener'>{props.title}</a>
      </h3>
      <div className="card-body">
        <p className="tech">{props.tech}</p>
        <p>{props.description}</p>
        <a href={props.ghLink} className='btn shadow' id='btn' target="_blank" rel='noreferrer noopener'>Visit Github</a>
      </div>
    </div >
  );
};

export default ProjectCard;