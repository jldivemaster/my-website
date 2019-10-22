import React from 'react';

const ProjectDetail = ({ project }) => {
  if(!project) {
    return <div>Loading...</div>
  }

  // const projectSrc = `https://www.youtube.com/embed/`;

  return (
    <div>
      <div className="ui embed">
        <iframe className="iframe" title="video player" src={project.img} alt={project.title} />
      </div>
        <div className="ui segment">
          <h4 className="ui header">{project.title}</h4>
          <p>{project.description}</p>
        </div>

    </div>
  )
}

export default ProjectDetail;
