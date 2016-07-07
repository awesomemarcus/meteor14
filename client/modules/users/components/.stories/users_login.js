import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../../../core/components/main_layout';
import UsersLogin from '../users_login';

const meteorSettings = {site: 'site1'};

storiesOf('Users Login', module)
  .add('Login Form', () => {
    const mainError = null;
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} mainError={mainError}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on login', () => {
    const mainError = 'Error on login';
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} mainError={mainError}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With Invalid Email', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address' : 'Invalid Email',
    };

    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With Invalid Password', () => {
    const mainError = null;
    const formErrorObject = {
      'password' : 'Invalid Password',
    };
    return (
      <Layout content={ () => (<UsersLogin userLogin={action('userLogin')} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  });
