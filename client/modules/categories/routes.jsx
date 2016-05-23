import React from 'react';
import {mount} from 'react-mounter';


import AuthChecker from '../users/containers/auth_checker.js';
import MainLayout from '../core/components/main_layout.jsx';
import CategoriesAdd from './containers/categories_add.js';
import CategoriesUpdate from './containers/categories_update.js';
import CategoriesView from './containers/categories_view.js';
import CategoriesDelete  from './containers/categories_delete.js';
import CategoriesList from './containers/categories_list.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const AuthCheck = injectDeps(AuthChecker);

  FlowRouter.route('/categories/add', {
    name: 'categories_add',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesAdd />),
      });
    },
  });

  FlowRouter.route('/categories/update/:category_id', {
    name: 'categories_update',
    action({category_id}) {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesUpdate category_id={category_id} />),
      });
    },
  });

  FlowRouter.route('/categories/view/:category_id', {
    name: 'categories_view',
    action({category_id}) {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesView category_id={category_id} />),
      });
    },
  });

  FlowRouter.route('/categories/delete/:category_id', {
    name: 'categories_delete',
    action({category_id}) {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesDelete category_id={category_id} />),
      });
    },
  });

  FlowRouter.route('/categories/list', {
    name: 'categories_list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesList />),
      });
    },
  });


}
