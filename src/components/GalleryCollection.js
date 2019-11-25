import React from 'react';
import Thumbnail from './Thumbnail';
import PhotoModal from './PhotoModal';
import history from '../history';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';
import { CloudinaryContext, Image } from 'cloudinary-react';

class GalleryCollection extends React.Component {
  constructor(props) {
    super(props);

  };

  openPhotoDetail = (id) => {
    console.log('click')
    // return (
    //   <PhotoModal name="pic" id={`${props.folder}${id}`} title={`${props.folder}/${id}`}
    //   publicId={`${props.folder}/${id}`} onDismiss={() => history.push('/')}/>
    // )
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.tagName)
  };

  displayPhotos() {
    // console.log(this.props.photos)
    if(this.props.photos) {
      return this.props.photos.map(pic => {
        return (
          <Image key={pic.public_id} publicId={pic.public_id} openPhotoDetail={() => this.openPhotoDetail()}>
          </Image>
        )
      })
    }
  }

  render () {

    return (
      <div>
        <CloudinaryContext cloudName="jldivemaster" width="300" crop="scale">
          <div className="row subheader">
            {this.props.folder}
            <button onClick={this.props.return}>Back</button>
          </div>
          {this.displayPhotos()}

        </CloudinaryContext>
      </div>
  )};
}

const mapStateToProps = (state) => {
  return { photos: state.photos.resources }
};

export default connect(mapStateToProps, { fetchPhotos })(GalleryCollection);
