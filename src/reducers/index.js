import { combineReducers } from 'redux';
import authReducer from './authReducer';
import image from '../assets/notecatcher.png';
// Must be imported as reducer, but can be renamed to be more explicit.
// import { reducer as formReducer } from 'redux-form';

// ========== Dev Container Reducers ==================
const projectsReducer = () => {
  return [
    {id: 1, title: "NoteCatcher", description: "A note organization app for Flatiron Students", img: image, video: "snippet"},
    {id: 2, title: "VolunTravel", description: "A search engine site for traveling volunteer projects.", img: image, video: "snippet"},
    {id: 3, title: "Alumni Showcase", description: "Showcase site for Flatiron alumni projects", img: image, video: "snippet"}
  ]
};

const selectedProjectReducer = (selectedProject=projectsReducer()[0], action) => {
  if(action.type === 'PROJECT_SELECTED') {
    return action.payload;
  }

  return selectedProject;
};

// =========== Gallery Reducers =======================

const photosReducer = (state = [], action) => {
  if(action.type === 'FETCH_PHOTOS'){
    return action.payload
  }

  return state;
};


// combineReducers sets the state object!! ========
export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
  photos: photosReducer
  // form: formReducer
});
