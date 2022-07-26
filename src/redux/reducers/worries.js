import {
  APPEND_WORRY,
  APPEND_WORRY_TIME,
  REMOVE_WORRY,
  REMOVE_WORRY_TIME,
  SET_WORRY_TIMES,
  UPDATE_WORRY,
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
    case REMOVE_WORRY_TIME:
      const newWorriesTimes = state.worryTimes.filter(
        (item, index) => index !== action.data,
      );
      return {...state, worryTimes: newWorriesTimes};
    case APPEND_WORRY:
      return {...state, worries: [...state.worries, action.data]};
    case REMOVE_WORRY:
      const newWorries = state.worries.filter(item => item.id !== action.data);
      return {...state, worries: newWorries};
    case UPDATE_WORRY:
      const clone = state.worries;
      const index = clone.findIndex(item => item.id === action.data.id);
      console.log('data', action.data);
      console.log('index', index, clone[index]);
      if (index === -1) return;
      clone[index].info = action.data.info;
      clone[index].solve = action.data.solve;
      clone[index].worry = action.data.worry;
      clone[index].status = action.data.status;
      clone[index].favourite = action.data.favourite;
      console.log('updated', clone);
      return {...state, worries: [...clone]};
    default:
      return state;
  }
};
export default worries;
