import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
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

storiesOf('Users Update', module)
  .add('Update form', () => {
    const errorField = {
      error: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on result', () => {
    const errorField = {
      error: 'Error from method call',
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
    };


    return (
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on profilename', () => {
    const errorField = {
      error: null,
      profilename: 'Invalid Profilename',
      firstname: null,
      lastname: null,
      gender: null,
      age: null,
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on firstname', () => {
    const errorField = {
      error: null,
      profilename: null,
      firstname: 'Invalid firstname',
      lastname: null,
      gender: null,
      age: null,
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on lastname', () => {
    const errorField = {
      error: null,
      profilename: null,
      firstname: null,
      lastname: 'Invalid lastname',
      gender: null,
      age: null,
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on gender', () => {
    const errorField = {
      error: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: 'Invalid gender',
      age: null,
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on age', () => {
    const errorField = {
      error: null,
      profilename: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: 'Invalid age',
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  })
  .add('With error on all fields', () => {
    const errorField = {
      error: null,
      profilename: 'Invalid Profilename',
      firstname: 'Invalid Firstname',
      lastname: 'Invalid Lastname',
      gender: 'Invalid Gender',
      age: 'Invalid Age',
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
      <UsersUpdate userUpdateAccount={action('userUpdateAccount')} user={userObject} getAgeOptions={getAgeOptions()} errorField={errorField} />
    );
  });
