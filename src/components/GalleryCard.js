import React from 'react';

const GalleryCard = (props) => {

  return (
    <div id={props.id} className="ui fluid raised card" onClick={props.openCollection}>
      <div class="image">
        <img src="/images/avatar/large/daniel.jpg" />
      </div>
      <div class="content">
        <a class="header">{props.title}</a>
      </div>
    </div>
  )
};

export default GalleryCard;
