import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import UsersLogin from './containers/users_login';
import UsersSignup from './containers/users_signup';
import UsersProfile from './containers/users_profile';
import AuthChecker from '../users/containers/auth_checker';

export default function (injectDeps, {FlowRouter,Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const AuthCheck = injectDeps(AuthChecker);

  FlowRouter.route('/users/login', {
    name: 'login',
    action() {
        if(Meteor.userId()){
          FlowRouter.go("/");
        }
      mount(MainLayoutCtx, {
        content: () => (<UsersLogin />),
      });
    },
  });

  FlowRouter.route('/users/signup', {
    name: 'signup',
    action() {
      if(Meteor.userId()){
        FlowRouter.go("/");
      }
      mount(MainLayoutCtx, {
        content: () => (<UsersSignup />),
      });
    },
  });

  FlowRouter.route('/users/profile', {
    name: 'profile',
    action() {
      mount(AuthCheck, {
      MainLayout,  content: () => (<UsersProfile />),
      });
    },
  });

}
