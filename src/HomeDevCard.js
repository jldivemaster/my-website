import React from 'react';
import { withRouter } from 'react-router-dom';
import { history } from 'history';
import image from './assets/rails_diagram2.jpeg';

class HomeDevCard extends React.Component {

  render(){
  return (
    <div className="raised link card home-card dev-card" onClick={() => this.props.history.push('/dev')}>
      <img className="ui image" src={image} />
      <div className="front-container">
        <h2>Software Dev Page</h2>
      </div>
    </div>
  )}
};

export default withRouter(HomeDevCard);
