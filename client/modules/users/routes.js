import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import UsersLogin from './containers/users_login';
import UsersSignup from './containers/users_signup';
import UsersProfile from './containers/users_profile';
import UsersUpdate from './containers/users_update';
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

  FlowRouter.route('/users/profile/:userId', {
    name: 'profile',
    action({userId}) {
      mount(AuthCheck, {
      MainLayout,  content: () => (<UsersProfile userId={userId} />),
      });
    },
  });

  FlowRouter.route('/users/update/', {
    name: 'users update',
    action() {
      mount(AuthCheck, {
      MainLayout,  content: () => (<UsersUpdate />),
      });
    },
  });

}
