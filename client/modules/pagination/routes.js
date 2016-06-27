import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.js';
import Pagination from '/client/modules/pagination/containers/pagination.js';
import AuthChecker from '../users/containers/auth_checker';

export default function (injectDeps, {FlowRouter}) {
  const AuthCheck = injectDeps(AuthChecker);

  FlowRouter.route('/pagination', {
    name: '',
    action() {
      mount(AuthCheck, {
        MainLayout, content: () => (<Pagination />),
      });
    },
  });
}
