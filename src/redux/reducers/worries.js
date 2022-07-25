import {
  APPEND_WORRY,
  APPEND_WORRY_TIME,
  SET_WORRY_TIMES,
} from '../actions/action.types';

const initialState = {
  worryTimes: [],
  worries: [],
};

const worries = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORRY_TIMES:
      return {...state, worryTimes: action.data};
    case APPEND_WORRY_TIME:
      return {...state, worryTimes: [...state.worryTimes, action.data]};
    case APPEND_WORRY:
      return {...state, worries: [...state.worries, action.data]};
    default:
      return state;
  }
};
export default worries;
