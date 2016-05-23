import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Signup from '../components/signup.jsx';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  getAgeOptions: actions.users.getAgeOptions,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);
