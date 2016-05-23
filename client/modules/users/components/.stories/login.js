import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../login.jsx';

storiesOf('Users Login', module)
  .add('Login Form', () => {
    const error = null;
    return (
      <Login userLogin={action('userLogin')} error={error}/>
    );
  })
  .add('With error on login', () => {
    const error = 'Error on login';
    return (
      <Login userLogin={action('userLogin')} error={error}/>
    );
  });
