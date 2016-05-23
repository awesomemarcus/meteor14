import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import UsersLogin from './containers/users_login.js';
import UsersSignup from './containers/users_signup.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/users/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UsersLogin />),
      });
    },
  });

  FlowRouter.route('/users/signup', {
    name: 'signup',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UsersSignup />),
      });
    },
  });
}
