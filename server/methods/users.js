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
      let Checker =  User.namedContext("myContext");
      let schemaNoError = Checker.validate(formData);
      let signUpErrors = Checker.invalidKeys();
      _.map(signUpErrors, function (o) { //map errors on each fields
          throw new Meteor.Error(Checker.keyErrorMessage(o.name));
      });

      if(!schemaNoError) {
          throw new Meteor.Error("Please fill in the form correctly.");
      }

      Accounts.createUser({
       "email" : formData["emails.$.address"],
       "password" : formData["password"],
       "profile.profilename" : formData["profile.profilename"],
       "profile.firstname" :formData["profile.firstname"],
       "profile.lastname" : formData["profile.lastname"],
       "profile.gender" : formData["profile.gender"],
       "profile.age" : formData["profile.age"],
       modifiedAt : new Date(),
       createdAt : new Date(),
     });




    },
  });
}
