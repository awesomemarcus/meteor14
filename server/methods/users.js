import User from '/lib/collections/users.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(()=>{
  Accounts.config({
    forbidClientAccountCreation: true,
});
  Accounts.onCreateUser((options, user) => {
           user.profile = {};
           user.profile.profilename = options["profile.profilename"];
           user.profile.firstname = options["profile.firstname"];
           user.profile.lastname = options["profile.lastname"];
           user.profile.gender = options["profile.gender"];
           user.profile.age = options["profile.age"];
           user.modifiedAt = options["modifiedAt"];
           user.createdAt = options["createdAt"];
           return user;
       });
});



export default function () {
  Meteor.methods({
    'usersSignup'(formData) {
      check(formData,Object);
      const data = {
        "email" : formData["emails.$.address"],
        "password" : formData["password"],
        "profile.profilename" : formData["profile.profilename"],
        "profile.firstname" :formData["profile.firstname"],
        "profile.lastname" : formData["profile.lastname"],
        "profile.gender" : formData["profile.gender"],
        "profile.age" : formData["profile.age"],
        modifiedAt : new Date(),
        createdAt : new Date(),
      };

      let Checker =  User.namedContext("myContext");
      let schemaHasNoError = Checker.validate(formData);
      if(!schemaHasNoError) {
          let signUpErrors = Checker.invalidKeys();
          throw new Meteor.Error(Checker.keyErrorMessage(signUpErrors[0].name));
      }

      Accounts.createUser(data);
    },

    'usersUpdate'(formData) {
      check(formData,Object);
      const data = {
        "profile.profilename" : formData["profile.profilename"],
        "profile.firstname" :formData["profile.firstname"],
        "profile.lastname" : formData["profile.lastname"],
        "profile.gender" : formData["profile.gender"],
        "profile.age" : formData["profile.age"],
        "profile.description" : formData["profile.description"],
        modifiedAt : new Date(),
      }

      let Checker =  User.namedContext("myContext");
      let schemaHasNoError = Checker.validate(formData);
      if(!schemaHasNoError) {
          let signUpErrors = Checker.invalidKeys();
          throw new Meteor.Error(Checker.keyErrorMessage(signUpErrors[0].name));
      }

      Meteor.users.update(
          {
            _id:Meteor.userId(),
          },
          {
            $set : data,
            }
        );
    },
  });
}
