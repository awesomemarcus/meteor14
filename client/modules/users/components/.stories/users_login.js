import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../../../core/components/main_layout';
import UsersLogin from '../users_login';

storiesOf('Users Login', module)
  .add('Login Form', () => {
    const error = null;
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} error={error}/>) }/>
    );
  })
  .add('With error on login', () => {
    const error = 'Error on login';
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} error={error}/>) }/>
    );
  });
