import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {ProductSchem} from '/lib/collections/products';
import {CategorySchem} from '/lib/collections/categories';
import User from '/lib/collections/users';
import _ from 'underscore';

const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();

  const userId = Meteor.userId() ? Meteor.userId() : null;
  const user = Meteor.user();

  return {
    userSubReady,
    userId,
    user,
  };

};

const formValidator = (schemaContext, object) => {
  let errorObject = {};

  const validate = schemaContext.validate(object);
  let signUpErrors = schemaContext.invalidKeys();
  _.map(signUpErrors, function (err) { //map errors on each fields
      errorObject[err.name] = schemaContext.keyErrorMessage(err.name);
  });

  return {
      validate: validate ,
      errorObject:errorObject,
    };

};


export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    authCommon,
    ProductSchem,
    CategorySchem,
    User,
    _ ,
    formValidator,
  };
}
