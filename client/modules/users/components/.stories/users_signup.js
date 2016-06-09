import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../../../core/components/main_layout';
import UsersSignup from '../users_signup';


const getAgeOptions = ()=> {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
}

storiesOf('Users Signup', module)
  .add('Signup form', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
    };


    return (
        <Layout content={ () => (<UsersSignup userSignup={action('userSignup')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on result', () => {
    const errorField = {
      error: 'Error from method call',
      email: null,
      password: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on email', () => {
    const errorField = {
      error: null,
      email: 'Invalid Email',
      password: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on password', () => {
    const errorField = {
      error: null,
      email: null,
      password: 'Invalid Password',
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on username', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      profilename: 'Invalid Profilename',
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on firstname', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      profilename: null,
      firstname: 'Invalid Firstname',
      lastname: null,
      gender: null,
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on lastname', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      profilename: null,
      firstname: null,
      lastname: 'Invalid Lastname',
      gender: null,
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on gender', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: 'Invalid Gender',
      age: null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on age', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: 'Invalid Age',
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  })
  .add('With error on all fields', () => {
    const errorField = {
      error: null,
      email: 'Invalid Email',
      password: 'Invalid Password',
      profilename: 'Invalid Profilename',
      firstname: 'Invalid Firstname',
      lastname: 'Invalid Lastname',
      gender: 'Invalid Gender',
      age: 'Invalid Age',
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} errorField={errorField} />) } />
    );
  });
