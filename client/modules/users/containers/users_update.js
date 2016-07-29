import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersUpdate from '../components/users_update';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  const formErrorObject = LocalState.get("formErrorObject", null);
  const getAgeOptions = initAgeOptions();

  const user = Meteor.users.findOne({_id: Meteor.userId()});

  onData(null, {user, getAgeOptions, formErrorObject});
};

export const depsMapper = (context, actions) => ({
  usersUpdate:actions.users.usersUpdate,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersUpdate);

const initAgeOptions = () => {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
};
