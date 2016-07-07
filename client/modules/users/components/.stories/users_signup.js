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

const meteorSettings = {site: 'site1'};

storiesOf('Users Signup', module)
  .add('Signup form', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
        <Layout content={ () => (<UsersSignup userSignup={action('userSignup')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on result', () => {
    const mainError = 'Error from method call';
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on email', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': 'Invalid Email',
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on password', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: 'Invalid Password',
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on confirm password', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: 'Password not match',
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on username', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': 'Invalid Profilename',
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on firstname', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': 'Invalid Firstname',
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on lastname', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': 'Invalid Lastname',
      'profile.gender': null,
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on gender', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': 'Invalid Gender',
      'profile.age': null,
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on age', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': null,
      password: null,
      confirmPassword: null,
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': 'Invalid Age',
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  })
  .add('With error on all fields', () => {
    const mainError = null;
    const formErrorObject = {
      'emails.$.address': 'Invalid Email',
      password: 'Invalid password',
      confirmPassword: 'Invalid confirm password',
      'profile.profilename': 'Invalid Profilename',
      'profile.firstname': 'Invalid Firstname',
      'profile.lastname': 'Invalid Lastname',
      'profile.gender': 'Invalid Gender',
      'profile.age': 'Invalid Age',
    };

    return (
      <Layout content={ () => (<UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } meteorSettings={meteorSettings} />
    );
  });
