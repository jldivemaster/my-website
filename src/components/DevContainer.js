import React from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';
import Header from './Header';
import image from '../assets/notecatcher.png';
import { connect } from 'react-redux';

// const projects = [{id: 1, title: "Notecatcher", description: "A note organization app for Flatiron Students", img: image, video: "snippet"},
//         {id: 2, title: "Voluntravel", description: "A search engine site for traveling volunteer projects.", img: image, video: "snippet"},
//         {id: 3, title: "Alumni Showcase", description: "Showcase site for Flatiron alumni projects", img: image, video: "snippet"}]

class DevContainer extends React.Component {

  state = { sidebarWidth: '0' }

  componentDidMount() {
    this.setState({ sidebarWidth: '340px' })
  };

  componentWillUnmount() {
    this.setState({ sidebarWidth: '0' })
  };

  render() {
    let width = this.state.sidebarWidth
  return (
    <div>
      <Header />
      <div className="container dev-container">
        <div className="ui grid dev-grid">
          <div className="ui row dev-row">
            <div className="eleven wide column">
              <ProjectDetail />
            </div>

            <div className="sidebar" style={{ width: width, transition: '0.5sec' }}>
              <ProjectList onProjectSelect={this.handleProjectSelect} />
            </div>

          </div>
        </div>
      </div>
      <div className="ui list">
        <div className="header">Blog Posts
        </div>
        <div className="ui unordered list">
          <ul><a target="_blank" rel="noopener noreferrer" href="https://medium.com/swlh/quantum-computing-1d40d4ed43b2">Quantum Computing</a></ul>
          <ul><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jlspursfan/web-extensions-15ebf071a16e">Web Extensions</a></ul>
          <ul><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jlspursfan/rspec-tests-for-beginners-a798c8bf6bac">RSpec Tests For Beginners</a></ul>
        </div>
      </div>
    </div>
  )}
};

const mapStateToProps = (state) => {
  return {  }
};

export default connect(mapStateToProps)(DevContainer);
