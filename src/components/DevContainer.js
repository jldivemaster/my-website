import React from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';
import Header from './Header';
import image from '../assets/notecatcher.png';

const projects = [{id: 1, title: "Notecatcher", description: "A note organization app for Flatiron Students", img: image, video: "snippet"},
        {id: 2, title: "Voluntravel", description: "A search engine site for traveling volunteer projects.", img: image, video: "snippet"},
        {id: 3, title: "Alumni Showcase", description: "Showcase site for Flatiron alumni projects", img: image, video: "snippet"}]

class DevContainer extends React.Component {

  state = { projects: projects,
          selectedProject: projects[0],
          sidebar: '0' }

  handleProjectSelect  = (project) => {
    this.setState({ selectedProject: project })
  };

  componentDidMount() {
    this.setState({ sidebar: '340px' })
  };

  componentWillUnmount() {
    this.setState({ sidebar: '0' })
  };

  render() {
    let width = this.state.sidebar
  return (
    <div>
      <Header />
      <div className="container dev-container">
        <div className="ui grid dev-grid">
          <div className="ui row dev-row">
            <div className="eleven wide column">
              <ProjectDetail project={this.state.selectedProject}  />
            </div>

            <div className="sidebar" style={{ width: width, transition: '0.5sec' }}>
              <ProjectList projects={this.state.projects} onProjectSelect={this.handleProjectSelect} />
            </div>

          </div>
        </div>
      </div>
      <div className="ui list">
        <div className="header">Blog Posts
        </div>
        <div className="ui unordered list">
          <ul><a href="https://medium.com/swlh/quantum-computing-1d40d4ed43b2">Quantum Computing</a></ul>
          <ul><a href="https://medium.com/@jlspursfan/web-extensions-15ebf071a16e">Web Extensions</a></ul>
        </div>
      </div>
    </div>
  )}
};

export default DevContainer;
