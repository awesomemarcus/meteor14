import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/uploadAvatar', {
    name: 'upload',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Upload />)
      });
    }
  });
}
