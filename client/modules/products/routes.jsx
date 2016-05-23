import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import ProductsAdd from './containers/products_add.js';
import ProductsUpdate from './containers/products_update.js';
import ProductsView from './containers/products_view.js';
import ProductsDelete  from './containers/products_delete.js';
import ProductsList from './containers/products_list.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/products/add', {
    name: 'products_add',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ProductsAdd />)
      });
    }
  });

  FlowRouter.route('/products/update/:productId', {
    name: 'products_update',
    action({productId}) {
      mount(MainLayoutCtx, {
        content: () => (<ProductsUpdate productId={productId}/>)
      });
    }
  });

  FlowRouter.route('/products/view', {
    name: 'products_view',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ProductsView />)
      });
    }
  });

  FlowRouter.route('/products/list', {
    name: 'products_list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ProductsList />)
      });
    }
  });


}
