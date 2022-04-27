import React from 'react'

const styles = {

};

const ProjectCard = (props) => {
  return (
    <div key={props.id} className="card col-lg-6 col-md-12 shadow p-3 mb-5 rounded">
      <a href={props.link} className='link' target="_blank">
        <img className='card-img-top' src={props.imgLink}></img>
      </a>
      <h3 className="project-header mb-4"><a href={props.link} className='link' target="_blank">{props.title}</a></h3>
      <div className="card-body">
        <p>{props.description}</p>
        <a href={props.ghLink} className='btn btn-primary' target="_blank">Visit Github</a>
      </div>
    </div >
  );
};

export default ProjectCard;