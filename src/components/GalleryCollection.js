import React from 'react';
import Thumbnail from './Thumbnail';
import history from '../history';
import PhotoModal from './PhotoModal';

const GalleryCollection = (props) => {

  const openPhotoDetail = (id) => {
    console.log('click')
    // return (
    //   <PhotoModal name="pic" id={`${props.folder}${id}`} title={`${props.folder}/${id}`}
    //   publicId={`${props.folder}/${id}`} onDismiss={() => history.push('/')}/>
    // )
  }

  const photos = [...Array(props.numPics).keys()].map(num => {
      return (
        <Thumbnail id={`${props.folder}${num+1}`} title={`${props.folder}/${num+1}`}
        publicId={`${props.folder}/${num+1}`} openPhotoDetail={() => openPhotoDetail(`${props.folder}${num+1}`)}/>
      )
    })


  return(
    <div>
      <div className="row subheader">
        {props.folder}
        <button onClick={props.return}>Back</button>
      </div>
      <div className="image-list">
        {photos}
      </div>
    </div>
  )
};

export default GalleryCollection;
