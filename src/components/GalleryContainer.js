import React from 'react';
import GalleryHome from './GalleryHome';
import Header from './Header';

class GalleryContainer extends React.Component {
  state = { }

  render(){
    return(
      <div>
      <Header />
      <GalleryHome />
      </div>
    )
  };
}

export default GalleryContainer;
