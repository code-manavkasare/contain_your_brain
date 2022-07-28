import {combineReducers} from 'redux';
import worries from './worries';
import auth from './auth';

const rootReducer = combineReducers({
  worries,
  auth,
});

export default (state, action) => {
  return rootReducer(state, action);
};
