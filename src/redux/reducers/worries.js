import {
  APPEND_WORRY,
  APPEND_WORRY_TIME,
  REMOVE_WORRY,
  REMOVE_WORRY_TIME,
  SET_WORRY_TIMES,
  UPDATE_WORRY,
  UPDATE_WORRY_TIME,
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
    case UPDATE_WORRY_TIME:
      const worryTimeClone = state.worryTimes;
      const worryTimeIndex = worryTimeClone.findIndex(
        (item, index) => index === action.data.index,
      );
      console.log('index', worryTimeIndex);
      if (worryTimeIndex === -1) return state;
      worryTimeClone[worryTimeIndex].time = action.data.time;
      worryTimeClone[worryTimeIndex].duration = action.data.duration;
      worryTimeClone[worryTimeIndex].day = action.data.day;
      worryTimeClone[worryTimeIndex].addToCalendar = action.data.addToCalendar;
      worryTimeClone[worryTimeIndex].ringMyAlarm = action.data.ringMyAlarm;
      return {...state, worryTimes: [...worryTimeClone]};
    case APPEND_WORRY:
      return {...state, worries: [...state.worries, action.data]};
    case REMOVE_WORRY:
      const newWorries = state.worries.filter(item => item.id !== action.data);
      return {...state, worries: newWorries};
    case UPDATE_WORRY:
      const clone = state.worries;
      const index = clone.findIndex(item => item.id === action.data.id);
      if (index === -1) return;
      clone[index].info = action.data.info;
      clone[index].solve = action.data.solve;
      clone[index].worry = action.data.worry;
      clone[index].status = action.data.status;
      clone[index].favourite = action.data.favourite;
      return {...state, worries: [...clone]};
    default:
      return state;
  }
};
export default worries;
