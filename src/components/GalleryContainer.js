import React from 'react';
import GalleryHome from './GalleryHome';
import Header from './Header';
import GalleryCollection from './GalleryCollection';

class GalleryContainer extends React.Component {
  state = { view: 'home' }

  setView = (view) => {
    this.setState({ view: view })
  };

  displayView = () => {
    if(this.state.view === 'home') {
        return <GalleryHome openCollection={this.setView}/>;
    }
    return <GalleryCollection tagName={this.state.view} return={() => this.setView('home')} />
  };

  render(){
    return(
      <div>
      <Header />
      {this.displayView()}
      </div>
    )
  };
}

export default GalleryContainer;
