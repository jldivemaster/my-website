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
    this.props.fetchPhotos()
    // axios.get('http://res.cloudinary.com/jldivemaster/image/list/sunset.json')
    //         .then(res => {
    //             console.log(res.data.resources);
    //             this.setState({ gallery: res.data.resources });
    //         });
  };

  render () {
    const photos = this.props.photos.map(pic => {
        return (
          <Image key={pic.public_id} publicId={pic.public_id} openPhotoDetail={() => this.openPhotoDetail()}>
          </Image>
        )
      })

    return (
      <div>
        <CloudinaryContext cloudName="jldivemaster">
          <div className="row subheader">
            {this.props.folder}
            <button onClick={this.props.return}>Back</button>
          </div>

            {photos}
        </CloudinaryContext>
      </div>
  )};
}

const mapStateToProps = (state) => {
  return { photos: state.photos }
};

export default connect(mapStateToProps, { fetchPhotos })(GalleryCollection);
