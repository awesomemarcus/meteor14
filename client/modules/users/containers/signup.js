import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Signup from '../components/signup.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get("signup_error");
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);
