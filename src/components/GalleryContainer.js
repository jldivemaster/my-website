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
        return <GalleryHome openView={this.setView}/>;
    }
    return <GalleryCollection return={() => this.setView('home')} folder={this.state.view} numPics={5} />
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
