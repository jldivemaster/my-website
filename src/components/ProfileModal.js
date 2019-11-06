import React from 'react';
import ReactDOM from 'react-dom';

const ProfileModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active" style={{ paddingTop: '58px' }}>
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active" style={{ paddingLeft: '10px', paddingRight: '10px' }} >
        <div className="ui grid modal-grid">
          <div className="row">
            <div className="actions three wide column">
              {props.actions}
            </div>
            <div className="header name ten wide column">
              <h2>{props.name}</h2>
            </div>
            <div className="actions three wide column">
              {props.actions}
            </div>
          </div>
          <div className="row">
            <div className="description sixteen wide column">{
              props.description}
            </div>
          </div>
          <div className="row">
            <div className="grid-image five wide column">
              IMAGE
            </div>
            <div className="grid-content scrolling content eleven wide column">
              {props.content}<br />
              adsfva<br />
              dfv'adsfvavsd<br />
              gbsf<br />
              gbsdfb<br />
              adsgb<br />
              ndhn<br />
              dfhgn<br />
              sdfvadfg<br />
              b dgh<br />
               fgj<br />
                fhj<br />
                 (jmdg<br />
                 hnd<br />
               dfhgndghn<br />
               Dh)<br />
               asdf<br />
               asdf<br />
               asdf<br />
               asdf<br />
               asdf<br />
               asdf<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
               a<br />
                end
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
};

export default ProfileModal;
