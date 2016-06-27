const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../users';
import _ from "underscore";

import User from '/lib/collections/users';

describe('users.actions.userSignup', () => {
  const formData = {
    "emails.$.address" : "junskihere@gmail.com",
    "password" : "password",
    "confirmPassword" : "password",
    "profile.profilename" :  "profilename",
    "profile.gender" :  "male",
    "profile.age" :  19,
    "modifiedAt" : new Date(),
    "createdAt" : new Date(),
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

  const LocalState = {set : spy(), get: spy()};

  it("it should do a Meteor call with no Error", ()=> {
      const Meteor =  {uuid: () => 'id', call: stub()};

      actions.userSignup({Meteor,LocalState,User, pushToObject, formValidator},formData);

      expect(LocalState.set.args).to.have.length(2);
  });

  it("it should give a main_error", ()=>{
      LocalState.set("mainError","Error");
      expect(LocalState.set.args[2]).to.deep.equal(["mainError" , "Error"]);
  });

  it("it should require that the email is a valid email", ()=>{
      formData["emails.$.address"] = "jun@mail";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[4]).to.deep.equal(['formErrorObject',{"emails.$.address":"Email Address must be a valid e-mail address"}]);
  });

  it("it should require email", ()=>{
      formData["emails.$.address"] = "";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[6]).to.deep.equal(['formErrorObject',{"emails.$.address":"Email Address must be a valid e-mail address"}]);
  });

  it("it should say password must be atleast 6 characters", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "four";
      formData["confirmPassword"] = null;

      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[8]).to.deep.equal(['formErrorObject',{ password: 'Password must be at least 6 characters', confirmPassword: 'Password not match' }]);
  });

  it("it should say password not match", ()=>{
      formData["password"] = "asdasddasdasdasd";
      formData["confirmPassword"] = "asdasddasdsadaasdasd";

      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[10]).to.deep.equal(['formErrorObject', {"confirmPassword": "Password not match"}]);
  });

  it("it should not allow morethan 20 characters", ()=>{
      formData["password"] = "123456789012345678901asjhasdkfjhaskjdhqwexckvbkdjfakshdgfkajshdgfqwoieusdfjhsadfkjahsdkfjhasdkfjhasgiouqweskjhfaskjdhxcvajhsdfkjahsdfasdlkfjhqwiuefqiwhfkajsddhfqiwueff";
      formData["confirmPassword"] = "123456789012345678901asjhasdkfjhaskjdhqwexckvbkdjfakshdgfkajshdgfqwoieusdfjhsadfkjahsdkfjhasdkfjhasgiouqweskjhfaskjdhxcvajhsdfkjahsdfasdlkfjhqwiuefqiwhfkajsddhfqiwueff";

      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[12]).to.deep.equal(['formErrorObject',{ password: 'Password cannot exceed 100 characters', confirmPassword: 'Confirm Password cannot exceed 100 characters' }]);
  });

  it("it should say profilename must be at least 1 char", ()=>{
      formData["password"] = "password";
      formData["confirmPassword"] = "password";
      formData["profile.profilename"] = "";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[14]).to.deep.equal(['formErrorObject', {"profile.profilename": "Profilename must be at least 1 characters"}]);
  });

  it("it should say gay is not allowed value on gender", ()=>{
      formData["profile.profilename"] = "profilename";
      formData["profile.gender"] = "gay";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[16]).to.deep.equal(['formErrorObject', {"profile.gender": "gay is not an allowed value"}]);
  });

  it("it should require gender field", ()=>{
      formData["profile.gender"] = "";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[18]).to.deep.equal(['formErrorObject', {"profile.gender": " is not an allowed value"}]);
  });

  it("it should require that age is a number", ()=>{
      formData["profile.gender"] = "male";
      formData["profile.age"] = "not a number";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[20]).to.deep.equal(['formErrorObject', {"profile.age": "Age must be a number"}]);
  });

  it("it should require age feild", ()=>{
      formData["profile.age"] = "";
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[22]).to.deep.equal(['formErrorObject', {"profile.age": "Age must be a number"}]);
  });


  it("it should require age cannot exceed 99", ()=>{
      formData["profile.age"] = 100;
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[24]).to.deep.equal(['formErrorObject', {"profile.age" : "Age cannot exceed 99"}]);
  });

  it("it should require age  must be at least 18", ()=>{
      formData["profile.age"] = 17;
      actions.userSignup({LocalState,User, pushToObject, formValidator},formData);
      expect(LocalState.set.args[26]).to.deep.equal(['formErrorObject', {"profile.age": "Age must be at least 18"}]);
  });
});
