import {combineReducers} from 'redux';
import worries from './worries';

const rootReducer = combineReducers({
  worries,
});

export default (state, action) => {
  return rootReducer(state, action);
};
