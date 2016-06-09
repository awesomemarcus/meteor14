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
    "profile.profilename" :  "value",
    "profile.gender" :  "male",
    "profile.age" :  19,
    "modifiedAt" : new Date(),
    "createdAt" : new Date(),
  }
  const LocalState = {set : spy()};

  it("it should do a Meteor call with no Error", ()=> {
      const Meteor =  {uuid: () => 'id', call: stub()};
      actions.userSignup({Meteor,LocalState,User, _},formData);
      expect(LocalState.set.args).to.have.length(0);
  });

  it("it should give a main_error", ()=>{
      LocalState.set("main_error","Error");
      expect(LocalState.set.args[0]).to.deep.equal(["main_error" , "Error"]);
  });

  it("it should require that the email is a valid email", ()=>{
      formData["emails.$.address"] = "jun@mail";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[1]).to.deep.equal(["emails.$.address" , "Email Addess must be a valid e-mail address"]);
  });



  it("it should require email is not null", ()=>{
      formData["emails.$.address"] = null;
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[2]).to.deep.equal(["emails.$.address" , "Email Addess is required"]);
  });

  it("it should say password must be atleast 6 characters", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "four";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[3]).to.deep.equal(["password" , "Password must be at least 6 characters"]);
  });

  it("it should require password", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = null;
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[4]).to.deep.equal(["password" , "Password is required"]);
  });

  it("it should not allow morethan 20 characters", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "123456789012345678901asjhasdkfjhaskjdhqwexckvbkdjfakshdgfkajshdgfqwoieusdfjhsadfkjahsdkfjhasdkfjhasgiouqweskjhfaskjdhxcvajhsdfkjahsdfasdlkfjhqwiuefqiwhfkajsddhfqiwueff";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[5]).to.deep.equal(["password" , "Password cannot exceed 100 characters"]);
  });

  it("it should say profilemustbe at least 1 char", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[6]).to.deep.equal(["profile.profilename" , "Profilename must be at least 1 characters"]);
  });

  it("it should say gay is not allowed value on gender", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "profilename";
      formData["profile.gender"] = "gay";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[7]).to.deep.equal(["profile.gender" , "gay is not an allowed value"]);
  });

  it("it should require gender field", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "profilename";
      formData["profile.gender"] = null;
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[8]).to.deep.equal(["profile.gender" , "Gender is required"]);
  });



  it("it should require that age is a number", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "profilename";
      formData["profile.gender"] = "male";
      formData["profile.age"] = "not a number";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[9]).to.deep.equal(["profile.age" , "Age must be a number"]);
  });



    it("it should require age feild", ()=>{
        formData["emails.$.address"] = "jun@mail.com";
        formData["password"] = "password";
        formData["profile.profilename"] = "profilename";
        formData["profile.gender"] = "male";
        formData["profile.age"] = null;
        actions.userSignup({LocalState,User, _},formData);
        expect(LocalState.set.args[10]).to.deep.equal(["profile.age" , "Age is required"]);
    });


    it("it should require age cannot exceed 99", ()=>{
        formData["emails.$.address"] = "jun@mail.com";
        formData["password"] = "password";
        formData["profile.profilename"] = "profilename";
        formData["profile.gender"] = "male";
        formData["profile.age"] = 100;
        actions.userSignup({LocalState,User, _},formData);
        expect(LocalState.set.args[11]).to.deep.equal(["profile.age" , "Age cannot exceed 99"]);
    });

    it("it should require age  must be at least 18", ()=>{
        formData["emails.$.address"] = "jun@mail.com";
        formData["password"] = "password";
        formData["profile.profilename"] = "profilename";
        formData["profile.gender"] = "male";
        formData["profile.age"] = 17;
        actions.userSignup({LocalState,User, _},formData);
        expect(LocalState.set.args[12]).to.deep.equal(["profile.age" , "Age must be at least 18"]);
    });
});
