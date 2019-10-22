import React from 'react';
import Analytics from './Analytics';
import Projects from './Projects';

const MyDashboard = () => {
  return(
    <div className="ui container">My DashBoard
      <div className="ui grid">
        <div className="row">
          <div className="seven wide column section">
            <Analytics />
          </div>
          <div className="seven wide column section">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
};

export default MyDashboard;
