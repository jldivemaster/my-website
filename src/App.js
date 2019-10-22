import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Footer from './components/Footer';
import DevContainer from './components/DevContainer';
import GalleryContainer from './components/GalleryContainer';
import MyProfile from  './components/MyProfile';
import MyDashboard from  './dashboard/MyDashboard';

const App = (props) => {
  return (
    <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/dev" component={DevContainer} />
        <Route path="/pics" component={GalleryContainer} />
        <Route path="/profile" exact component={MyProfile} />
        <Route path="/boss" exact component={MyDashboard} />
      </Switch>
      <div className="footer">
      <Footer />
      </div>
    </BrowserRouter>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { currentUserId: state.auth.userId,
          isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps)(App);

// <Route path="/boss" exact render={(props) => (
//   props.isSignedIn === true
//   ? <MyDashboard {...props} />
//   : <Redirect to='/dev' />
// )} />
