import React from 'react';
// import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <div className="head">
      <div className="ui four item menu" style={{ paddingTop: '15px', fontSize: '23px' }}>
        <div className="item">
          <Link to="/" >Home</Link>
        </div>
        <div className="item">
          <Link to="/dev">Dev</Link>
        </div>
        <div className="item">
          <Link to="/pics">Pics</Link>
        </div>
        <div className="item">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  )
};

export default Header;
