import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersProfile from '../components/users_profile';

export const composer = ({context, userId}, onData) => {
  const {Meteor} = context();

  if(Meteor.subscribe('usersProfile', userId).ready()){
    const user = Meteor.users.findOne({_id: Meteor.userId()});
    const currentUser = Meteor.userId();
    onData(null, {user, currentUser});
  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersProfile);
