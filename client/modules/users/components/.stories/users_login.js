import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../../../core/components/main_layout';
import UsersLogin from '../users_login';

const meteorSettings = {site: 'site1'};

storiesOf('Users Login', module)
  .add('Login Form', () => {
    const error = null;
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} error={error}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on login', () => {
    const error = 'Error on login';
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} error={error}/>) } meteorSettings={meteorSettings} />
    );
  });
