import React from 'react';
import { Image } from 'cloudinary-react';

class Thumbnail extends React.Component {
  constructor(props){
    super(props)
    this.state = { spans: 0 };

    // =====Use React Refs to access DOM elements
    this.imageRef = React.createRef();
  }

// ======Setting parent div height based on child pic attribute using EL
  componentDidMount() {
    console.log(this.imageRef.current.element)

      this.imageRef.current.element.addEventListener('load', this.setSpans)

  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans })
  }

  openPhotoDetail(e) {
    console.log('open', e.target)
  };

  render() {

  return (
    <div id={this.props.id} style={{ gridRowEnd: `span ${this.state.spans}` }} onClick={(e) => this.openPhotoDetail(e)}>
        <Image cloudName="jldivemaster" publicId={this.props.publicId} ref={this.imageRef} alt={this.props.description} width="300" crop="scale" >
        </Image>
    </div>
  )};
}

export default Thumbnail;
