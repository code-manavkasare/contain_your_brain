import {
  SET_WORRY_TIMES,
  APPEND_WORRY_TIME,
  APPEND_WORRY,
  REMOVE_WORRY_TIME,
  REMOVE_WORRY,
  UPDATE_WORRY,
  UPDATE_WORRY_TIME,
} from './action.types';

export const setWorryTimes = data => ({
  type: SET_WORRY_TIMES,
  data,
});

export const appendWorryTime = data => ({
  type: APPEND_WORRY_TIME,
  data,
});

export const removeWorryTime = data => ({
  type: REMOVE_WORRY_TIME,
  data,
});

export const updateWorryTime = data => ({
  type: UPDATE_WORRY_TIME,
  data,
});

export const appendWorry = data => ({
  type: APPEND_WORRY,
  data,
});

export const removeWorry = data => ({
  type: REMOVE_WORRY,
  data,
});

export const updateWorry = data => ({
  type: UPDATE_WORRY,
  data,
});
