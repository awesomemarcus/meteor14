import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersLogin from '../components/users_login';

export const composer = ({context,clearErrors}, onData) => {
  const {LocalState} = context();
  const formErrorObject = LocalState.get("formErrorObject", null);
  const mainError = LocalState.get("mainError", null);

  onData(null, {mainError, formErrorObject});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  usersLogin:actions.users.usersLogin,
  clearErrors:actions.users.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersLogin);
