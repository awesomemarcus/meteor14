import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import Layout from '../main_layout';
import UsersLogin from '../../../users/components/users_login';
import ProductsAdd from '../../../products/components/products_add';

const meteorSettings = {site: 'site1'};

storiesOf('Main Layout', module)
  .add('Login View', () => {
    return(
      <Layout content={()=> (<UsersLogin />)} meteorSettings={meteorSettings} />
    );
  })
  .add('Add Product View', () => {
    return(
      <Layout content={()=> (<ProductsAdd />)} meteorSettings={meteorSettings} userId={'jskdhksfwer'}/>
    );
  });
