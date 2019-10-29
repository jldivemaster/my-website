import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'cloudinary-react';

const PhotoModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active" style={{ paddingTop: '58px' }}>
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active" style={{ paddingLeft: '10px', paddingRight: '10px' }} >
        <Image cloudName="jldivemaster" publicId={props.publicId}>
        </Image>
      </div>
    </div>,
    document.querySelector('#modal')
  )
};

export default PhotoModal;
