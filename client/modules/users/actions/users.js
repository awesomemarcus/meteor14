import {check} from "meteor/check";
import UsersSchema from '/lib/collections/users.js';


export default {
  signup({Meteor, LocalState},formData){
    const localStateObj = {
      username : null,
      firstname : null,
      lastname : null,
      email : null,
      passwod : null,
      age : null,
      gender : null
    };

    LocalState.set("signup_error",localStateObj);

console.log( LocalState.get("signup_error"));
  let  username = UsersSchema.namedContext("myContext").validateOne(formData, "profile.name");
  if(!username){
    console.log(LocalState.get("signup_error"));

  }
  let  firstname = UsersSchema.namedContext("myContext").validateOne(formData, "profile.firstname");
  let  lastname = UsersSchema.namedContext("myContext").validateOne(formData, "profile.lastname");
  let  email = UsersSchema.namedContext("myContext").validateOne(formData, "email.$address");
  let  passwod = UsersSchema.namedContext("myContext").validateOne(formData, "passwod");
  let  age = UsersSchema.namedContext("myContext").validateOne(formData, "profile.age");
  let  gender = UsersSchema.namedContext("myContext").validateOne(formData, "profile.gender");
  },
  login({Meteor, LocalState},formData){
    Meteor.call('usersLogin',formData);
  },
  clearErrors({LocalState}){
    const localStateObj = {
      username : null,
      firstname : null,
      lastname : null,
      email : null,
      passwod : null,
      age : null,
      gender : null
    };

    return   LocalState.set("signup_error",localStateObj);
  },
}
