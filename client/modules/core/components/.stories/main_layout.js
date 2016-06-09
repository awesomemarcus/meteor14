import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import Layout from '../main_layout';
import UsersLogin from '../../../users/components/users_login';
import ProductsAdd from '../../../products/components/products_add';

storiesOf('Main Layout', module)
  .add('Login View', () => {
    return(
      <Layout content={()=> (<UsersLogin />)} />
    );
  })
  .add('Add Product View', () => {
    return(
      <Layout content={()=> (<ProductsAdd />)} userId={'jskdhksfwer'}/>
    );
  });
