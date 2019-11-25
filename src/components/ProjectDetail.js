import React from 'react';
import { connect } from 'react-redux';

const ProjectDetail = (props) => {
  if(!props.project) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="ui embed">
        <iframe className="iframe" title="video player" src={props.project.img} alt={props.project.title} />
      </div>
        <div className="ui segment">
          <h4 className="ui header">{props.project.title}</h4>
          <p>{props.project.description}</p>
        </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return { project: state.selectedProject }
};

export default connect(mapStateToProps)(ProjectDetail);
