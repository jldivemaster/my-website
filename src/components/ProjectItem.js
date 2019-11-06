import React from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions';

const ProjectItem = ({ project, selectProject }) => {

  return (
    <div className="project-item item" onClick={() => selectProject(project)}>
      <img className="ui image" src={project.img} alt={project.title} />
      <div className="content">
        <div className="header">{project.title}</div>
      </div>
    </div>
  )
};

// const mapStateToProps = (state) => {
//   return { }
// };

export default connect(null, { selectProject })(ProjectItem);
