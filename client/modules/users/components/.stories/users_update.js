import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../../../core/components/main_layout';
import UsersUpdate from '../users_update';

const getAgeOptions = () => {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
}

const userObject = {
  profile: {
    profilename: "johnyCash",
    firstname: "John",
    lastname: "Doe",
    gender: "male",
    age: "25"
  }
};

const meteorSettings = {site: 'site1'};

storiesOf('Users Update', module)
  .add('Update form', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    const userObject = {
      profile: {
        profilename: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on result', () => {
    const mainError = 'Error from method call';
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };


    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on profilename', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': 'Invalid profilename',
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    const userObject = {
      profile: {
        profilename: null,
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on firstname', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': 'Invalid Firstname',
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
    };

    const userObject = {
      profile: {
        profilename: "johnyCash",
        firstname: null,
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on lastname', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': 'Invalid Lastname',
      'profile.gender': null,
      'profile.age': null,
    };

    const userObject = {
      profile: {
        profilename: "johnyCash",
        firstname: "John",
        lastname: null,
        gender: "male",
        age: "25"
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on gender', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': 'Invalid Gender',
      'profile.age': null,
    };

    const userObject = {
      profile: {
        profilename: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: null,
        age: "25"
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on age', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': 'Invalid Age',
    };

    const userObject = {
      profile: {
        profilename: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: null
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on description', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': null,
      'profile.firstname': null,
      'profile.lastname': null,
      'profile.gender': null,
      'profile.age': null,
      'profile.description': 'Invalid Description',
    };

    const userObject = {
      profile: {
        profilename: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: null
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  })
  .add('With error on all fields', () => {
    const mainError = null;
    const formErrorObject = {
      'profile.profilename': 'Invalid Profilename',
      'profile.firstname': 'Invalid Firstname',
      'profile.lastname': 'Invalid Lastname',
      'profile.gender': 'Invalid Gender',
      'profile.age': 'Invalid Age',
      'profile.description': 'Invalid Description',
    };

    const userObject = {
      profile: {
        profilename: null,
        firstname: null,
        lastname: null,
        gender: null,
        age: null
      }
    };

    return (
      <Layout content={ () => (<UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} mainError={mainError} formErrorObject={formErrorObject}/>) } userId={'JKHJjJHGjhgJGBV'} meteorSettings={meteorSettings}/>
    );
  });
