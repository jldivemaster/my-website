import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, onProjectSelect })  => {

  const renderedList = projects.map(project => {
    return <ProjectItem project={project} key={project.id} onProjectSelect={onProjectSelect} />
  });

  return (
    <div className='sidebar-content'><h3>My Projects</h3>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  )
}

export default ProjectList;
