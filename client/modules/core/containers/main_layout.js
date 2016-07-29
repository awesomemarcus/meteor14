import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Layout from '../components/main_layout';

export const composer = ({context}, onData) => {

  const {authCommon, Meteor, meteorSettings, LocalState, Bert} = context();
  const {  userSubReady, userId,  user } = authCommon();
  if(userSubReady){

    const mainError = LocalState.get('mainError', null);
    const mainSuccess = LocalState.get('mainSuccess', null);

    const data = {userId, user, Meteor, meteorSettings, Bert, mainError, mainSuccess};
    onData(null, data);
  }

};

export const depsMapper = (context, actions) => ({
  clearErrors: actions.core.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Layout);
