import history from  '../history';
import cloudinary from '../apis/cloudinary';

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  }
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
};

export const selectProject = project => {
  return {
    type: 'PROJECT_SELECTED',
    payload: project
  }
};

export const fetchPhotos = (tagName) => {
  return async dispatch => {
    const response = await cloudinary.get('/' + tagName + '.json')

    dispatch({ type: 'FETCH_PHOTOS', payload: response.data })
  };
};
