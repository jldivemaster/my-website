import { combineReducers } from 'redux';
import authReducer from './authReducer';
// Must be imported as reducer, but can be renamed to be more explicit.
// import { reducer as formReducer } from 'redux-form';


// combineReducers sets the state object!! ========
export default combineReducers({
  auth: authReducer,
  // form: formReducer
});
