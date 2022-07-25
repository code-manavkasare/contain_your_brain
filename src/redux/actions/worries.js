import {SET_WORRY_TIMES, APPEND_WORRY_TIME, APPEND_WORRY} from './action.types';

export const setWorryTimes = data => ({
  type: SET_WORRY_TIMES,
  data,
});

export const appendWorryTime = data => ({
  type: APPEND_WORRY_TIME,
  data,
});

export const appendWorry = data => ({
  type: APPEND_WORRY,
  data,
});
