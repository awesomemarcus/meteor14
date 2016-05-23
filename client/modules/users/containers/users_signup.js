import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersSignup from '../components/users_signup.jsx';

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
)(UsersSignup);
