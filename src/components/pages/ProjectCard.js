import React from 'react'

const styles = {
  nope: {
    backgroundColor: 'red'
  },
};

const ProjectCard = (props) => {
  return (
    <div key={props.id} className="card col-6" style={styles.card}>
      <a href={props.link}>
        <img className='card-img-top' src={props.imgLink}></img>
        <div className="card-body">
          <h3 className="card-header mb-4">{props.title}</h3>
        </div>
      </a>
    </div >
  );
};

export default ProjectCard;