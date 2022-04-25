import React from 'react'

const styles = {
  nope: {
    backgroundColor: 'red'
  },
};

const ProjectCard = (props) => {
  return (
    <div key={props.id} className="card col-6" style={styles.card}>
      <h3 className="card-header">{props.title}</h3>
      <img className="card-body" src={props.imgLink}></img>
    </div>
  );
};

export default ProjectCard;