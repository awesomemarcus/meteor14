import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Signup from '../components/users_signup';

export const composer = ({context,clearErrors}, onData) => {
  const {LocalState} = context();

  const formErrorObject = LocalState.get("formErrorObject");
  const mainError = LocalState.get("mainError");
  const getAgeOptions = initAgeOptions();

  onData(null, {getAgeOptions, formErrorObject, mainError});

 return clearErrors;
};

export const depsMapper = (context, actions) => ({
  userSignup:actions.users.userSignup,
  clearErrors:actions.users.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);

const initAgeOptions = () => {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
};
