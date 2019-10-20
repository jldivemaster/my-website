import React from 'react';
import Analytics from './Analytics';
import Projects from './Projects';

const MyDashboard = () => {
  return(
    <div className="ui container">My Dash
      <div className="grid container">
        <Analytics />
      </div>
      <div className="grid container">
        <Projects />
      </div>
    </div>
  )
};

export default MyDashboard;
