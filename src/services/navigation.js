import {createRef} from 'react';

const navigationRef = createRef();
const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const push = name => {
  navigationRef.current?.push(name);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

export {push, navigate, goBack, navigationRef};
