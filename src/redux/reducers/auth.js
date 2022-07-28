import {AUTH} from '../actions/action.types';

const initialState = {
  authentication: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {...state, authentication: action.data};
    default:
      return state;
  }
};
export default auth;
