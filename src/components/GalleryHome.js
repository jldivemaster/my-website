import React from 'react';
import GalleryCard from './GalleryCard';

const GalleryHome = (props) => {
  return (
    <div className="ui container gallery">
      <div className="ui three column grid">
        <div className="row subheader">
        <h3>Locations</h3>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui fluid raised card">
              <div class="image">
                <img src="/images/avatar/large/daniel.jpg" />
              </div>
              <div class="content">
                <a class="header">One</a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui fluid raised card">
              <div class="image">
                <img src="/images/avatar/large/daniel.jpg" />
              </div>
              <div class="content">
                <a class="header">Two</a>
              </div>
            </div>
          </div>
          <div className="column">
            <GalleryCard id="1" title="Card Display" openCollection={props.openCollection} />
          </div>
        </div>

        <div className="row subheader">
          <h3>Subjects</h3>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui fluid raised card">
              <div class="image">
                <img src="/images/avatar/large/daniel.jpg" />
              </div>
              <div class="content">
                <a class="header">One</a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui fluid raised card">
              <div class="image">
                <img src="/images/avatar/large/daniel.jpg" />
              </div>
              <div class="content">
                <a class="header">Two</a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui fluid raised card">
              <div class="image">
                <img src="/images/avatar/large/daniel.jpg" />
              </div>
              <div class="content">
                <a class="header">Three</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GalleryHome;
