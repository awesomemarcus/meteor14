import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Signup from '../components/users_signup.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  const errorField = {
    "profile.username" :   LocalState.get("profile.username",null),
    "profile.firstname" :   LocalState.get("profile.firstname",null),
    "profile.lastname" :   LocalState.get("profile.lastname",null),
    "emails.$.address" :   LocalState.get("emails.$.address",null),
    "password" :   LocalState.get("password",null),
    "profile.age" :   LocalState.get("profile.age",null),
    "profile.gender" :   LocalState.get("profile.gender",null) ,
    "error" :  LocalState.get("main_error"),
  };

  onData(null, errorField);

};

export const depsMapper = (context, actions) => ({
  userSignup:actions.users.signup,
  clearErrors:actions.users.clearErrors,
  getAgeOptions:actions.users.getAgeOptions,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);
