import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Signup from '../signup.jsx';
//import '/public/bootstrap-3.3.6/css/bootstrap.min.css';
import '/client/assets/stylesheets/custom_style.css';

storiesOf('users.Signup', module)
  .add('signup form', () => {
    return (
      <Signup />
    );
  });
