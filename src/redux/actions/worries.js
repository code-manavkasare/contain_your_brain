import {
  SET_WORRY_TIMES,
  APPEND_WORRY_TIME,
  APPEND_WORRY,
  REMOVE_WORRY_TIME,
  REMOVE_WORRY,
  UPDATE_WORRY,
  UPDATE_WORRY_TIME,
  SET_WORRIES,
  UPDATE_WORRIES,
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

export const setWorries = data => ({
  type: SET_WORRIES,
  data,
});

export const updateWories = data => ({
  type: UPDATE_WORRIES,
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
