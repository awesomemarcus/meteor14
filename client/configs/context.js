
import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {ProductSchem} from '/lib/collections/products';
import {CategorySchem} from '/lib/collections/categories';
import User from '/lib/collections/users';
import {Bert} from 'meteor/themeteorchef:bert';
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
if(!Meteor.settings){
  Meteor.settings = {};
  Meteor.settings.public = {site:"site1"};
}
const formValidator = (schemaContext, object) => {
  let errorObject = {};

  const validate = schemaContext.validate(object);
  const formErrors = schemaContext.invalidKeys();

  _.map(formErrors, function (err) { //map errors for each fields
      errorObject[err.name] = schemaContext.keyErrorMessage(err.name);
  });

  return {
      validate: validate ,
      errorObject:errorObject,
    };
};

const pushToObject = (formObject, fieldName, fieldValue) => {
  if(!formObject){
    let objectArray = {};
    objectArray[fieldName] = fieldValue;

    formObject = objectArray;
  }

  formObject[fieldName] = fieldValue;

  return formObject;
}
let meteorSettings = {};

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
    pushToObject,
    meteorSettings,
    Bert,
  };
}
