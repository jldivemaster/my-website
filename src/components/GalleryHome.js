import React from 'react';
import GalleryCard from './GalleryCard';

const locations = ["Indonesia", "Mongolia", "China", "Mexico", "Peru", "Malaysia-Singapore", "Belize", "Russia", "PNW"];
const subjects = ["Underwater", "Sunsets", "Landmarks", "Landscape", "Animals", "City", "People"];

const GalleryHome = (props) => {

  const locCards = locations.map(loc => {
      let id = loc.indexOf();
    return (

        <GalleryCard id={`gl${id}`} title={loc} openCollection={props.openView} publicId={`${loc}/1`}/>

  )});

  const subCards = subjects.map(sub => {
      let id = sub.indexOf();
    return (

        <GalleryCard id={`gl${id}`} title={sub} openCollection={props.openView} publicId={`${sub}/1`}/>

  )});



  return (
    <div className="ui container gallery">
      <div className="ui three column grid">
        <div className="row subheader">
          <h3>Photos by Location</h3>
        </div>
        <div className="row">
          {locCards}
        </div>

        <div className="row subheader">
          <h3>Photos by Subject</h3>
        </div>
        <div className="row">
          {subCards}
        </div>
      </div>
    </div>
  )
};

export default GalleryHome;
