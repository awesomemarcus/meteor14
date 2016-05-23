import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersLogin from '../components/users_login.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  userLogin:actions.users.userLogin,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersLogin);
