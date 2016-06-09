import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../../../core/components/main_layout';
import UsersProfile from '../users_profile';

storiesOf('Users Profile', module)
  .add('Current user (Shows edit button)', () => {
    const userObject = {
      _id: "kjhEDFGKJouhjgGfM",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    const routeParamsUserId = "kjhEDFGKJouhjgGfM";

    return (
      <Layout content={ () => (<UsersProfile user={userObject} profileId={routeParamsUserId} />) } userId={routeParamsUserId} />
    );
  })
  .add('Not current user (Shows block button)', () => {
    const userObject = {
      _id: "kjhEDFGKJouhjgGfM",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    const routeParamsUserId = "kjhEDFGKJosduhjgGfM";

    return (
      <Layout content={ () => (<UsersProfile user={userObject} profileId={routeParamsUserId} />) } userId={routeParamsUserId} />
    );
  });
