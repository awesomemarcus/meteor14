import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import Login from './containers/login.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/users/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });
}
