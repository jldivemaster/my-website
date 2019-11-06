import React from 'react';
import ProfileModal from './ProfileModal';
import history from '../history';
import { Link } from 'react-router-dom';

const MyProfile = () => {

  const renderContent = () => {
    return <Link to="/" className="ui button">Close</Link>
  };

  return (
    <div className="profile">
      <ProfileModal name="Jason Leach" description="Here's a quick overview of myself"
      content="Longer description of myself" actions={renderContent()} onDismiss={() => history.push('/')}/>
    </div>
  )
};

export default MyProfile;
