import React from 'react';
import image from '../assets/greatwall.jpg'
import { Image } from 'cloudinary-react';

const GalleryCard = (props) => {

  const openCollection = () => {
    props.openCollection(props.title)
  }

  return (
    <div className="column">
    <div id={props.id} className="ui fluid raised card" onClick={() => openCollection()}>
      <div className="image">
        <Image cloudName="jldivemaster" publicId={props.publicId} >
        </Image>
      </div>
      <div className="content">
        <a className="header">{props.title}</a>
      </div>
    </div>
    </div>
  )
};

export default GalleryCard;
