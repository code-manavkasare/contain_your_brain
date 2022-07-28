import {AUTH} from './action.types';

export const authenticate = data => ({
  type: AUTH,
  data,
});
