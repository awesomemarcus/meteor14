import UsersSchema from '/lib/collections/users.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

export default function () {
  Meteor.methods({
    'usersLogin'(formData) {
      let isValid = UsersSchema.namedContext("myContext").validate(formData,"email.$.address");
      let isValid2 = UsersSchema.namedContext("myContext").validateOne(formData,"password");
      check(formData,UsersSchema,(err)=>{

      });

    },
    'usersSignup'(formData) {
      // check(formData,UsersSchema,(err)=>{
      //   if(err){
      //     console.log(err.message);
      //   }
      //
      // });


    }
  });
}
