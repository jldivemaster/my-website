import React from 'react';
import { connect } from 'react-redux';

const Main = (props) => {

  const renderAdmin = () => {
    if(props.isSignedIn){
      return <h3>My Dashboard</h3>
    }

    return <h3>Regular Main Page</h3>
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
