import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Signup from '../components/signup.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections,LocalState} = context();
  const error = LocalState.get("signup_error");
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  signup:actions.users.signup,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);
