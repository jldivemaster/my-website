import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeDevCard from './HomeDevCard';
import HomeGalleryCard from './HomeGalleryCard';

const Main = (props) => {

  const renderAdmin = () => {
    if(props.isSignedIn){
      return <h3>My Dashboard</h3>
    }

    return (
      <div className="main">
      <div className="ui relaxed centered grid">
        <h3>Title Page</h3>
        <div className="centered row">
          <Link to="/profile" className="ui button contained">Click to view profile</Link>
        </div>
        <div className="five column centered row">
          <div className="six wide column front-card">
            <HomeDevCard />
          </div>
          <div className="six wide column front-card">
            <HomeGalleryCard />
          </div>
        </div>
      </div>
      </div>
    )
  };

  return (
    <div className="ui container">{renderAdmin()}</div>
  )
};

const mapStateToProps = (state) => {
  return { currentUserId: state.auth.userId,
          isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps)(Main);
