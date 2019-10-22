import React from 'react';
import { withRouter } from 'react-router-dom';
import { history } from 'history';
import image from './assets/greatwall.jpg';

class HomeGalleryCard extends React.Component {

  render(){
  return (
    <div className="raised link red card home-card pic-card" onClick={() => this.props.history.push('/pics')}>
    <img className="ui image" src={image} alt="shit" />
    <div className="front-container">
      <h2>Photo Gallery</h2>
    </div>
    </div>
  )}
};

export default withRouter(HomeGalleryCard);
