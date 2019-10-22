import React from 'react';

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <div className="project-item item" onClick={() => onProjectSelect(project)} >
      <img className="ui image" src={project.img} alt={project.title} />
      <div className="content">
        <div className="header">{project.title}</div>
      </div>
    </div>
  )
}

export default ProjectItem;
