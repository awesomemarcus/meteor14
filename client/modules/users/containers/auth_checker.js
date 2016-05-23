import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AuthChecker from '../components/auth_checker.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, authCommon, FlowRouter} = context();
  const {  userSubReady, userId,  user } = authCommon();
  if(userSubReady){
    const data = {  userId, user};
    onData(null, {data});
  }

};


export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AuthChecker);
