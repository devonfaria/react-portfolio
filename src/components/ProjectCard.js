import React from 'react'
import Test from '../media/test.png'

const styles = {
  nope: {
    backgroundColor: 'red'
  },
};

const ProjectCard = (props) => {
  return (
    <div key={props.id} className="card col-6" style={styles.card}>
      <h3 className="card-header mb-4">{props.title}</h3>
      <img className="card-body" src={Test}></img>
    </div>
  );
};

export default ProjectCard;