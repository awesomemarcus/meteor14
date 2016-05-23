import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Signup from '../signup.jsx';

// import '/public/bootstrap-3.3.6/css/bootstrap.min.css';

const getAgeOptions = ()=> {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
}

storiesOf('users.Signup', module)
  .add('signup form', () => {
    const error = null;
    const errorField = {
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on submit', () => {
    const error = 'Error on form submit';
    const errorField = {
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on email', () => {
    const error = null;
    const errorField = {
      email: 'Invalid Email',
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on password', () => {
    const error = null;
    const errorField = {
      email: null,
      password: 'Invalid Password',
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on username', () => {
    const error = null;
    const errorField = {
      email: null,
      password: null,
      username: 'Invalid Username',
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on firstname', () => {
    const error = null;
    const errorField = {
      email: null,
      password: null,
      username: null,
      firstname: 'Invalid Firstname',
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on lastname', () => {
    const error = null;
    const errorField = {
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: 'Invalid Lastname',
      gender: null,
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on gender', () => {
    const error = null;
    const errorField = {
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: 'Invalid Gender',
      age: null
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  })
  .add('with error on age', () => {
    const error = null;
    const errorField = {
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: 'Invalid Age'
    };

    return (
      <Signup createAccount={action('createAccount')} getAgeOptions={getAgeOptions} error={error} errorField={errorField} />
    );
  });
