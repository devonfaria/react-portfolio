import React from 'react'

const ProjectCard = (props) => {
  return (
    <div key={props.id} className="card">
      <h3>{props.title}</h3>
      <img src={props.imgLink}></img>
    </div>
  );
};

export default ProjectCard;