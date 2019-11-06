import React from 'react';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
// import { selectProject } from '../actions';

class ProjectList extends React.Component {

  renderList() {
      return this.props.projects.map(project => {
        return <ProjectItem project={project} key={project.id} />
    })
  };

  render() {
  return (
    <div className="sidebar-content"><h3>My Projects</h3>
      <div className="ui relaxed divided list">{this.renderList()}</div>
    </div>
  )};
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
};

export default connect(mapStateToProps)(ProjectList);
