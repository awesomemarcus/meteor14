import SimpleSchema from 'node-simple-schema';

/**
 * Users schema
 */


 SimpleSchema.messages({
   "passwordMismatch": "Password not match",
 });

const User = new SimpleSchema({

  profile: {
    type: Object,
    optional: true,
    label : "Profile",
  },

  "profile.profilename" : {
      type: String,
      min : 1,
      optional: true,
      label : "Profilename",
      optional: true,
  },

  "profile.firstname" : {
    type : String,
    label:"Firstname",
    min : 1,
    optional: true,
  },

  "profile.lastname" : {
    type : String,
    min : 1,
    label : "Lastname",
    optional: true,
  },

  "profile.gender" : {
    type:String,
    allowedValues: ["male", "female"],
    label: "Gender",
   optional: true,
  },

  "profile.age" : {
    type: Number,
    label: "Age",
    min: 18,
    max: 99,
   optional: true,
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true,

  },

  emails: {
    type: Array,
    optional: true,
    label: "Email",
  },

  "emails.$": {
    type: Object,
    optional: true,
  },

  "emails.$.address": {
    label : "Email Address",
    type: String,
    regEx: [
      SimpleSchema.RegEx.Email ,
      /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
    ],
        optional: true,
  },

  "emails.$.verified": {
    type: Boolean,
  },

  password: {
      type: String,
      label: "Password",
      min: 6,
      max: 100,
      optional: true,
  },

  confirmPassword: {
    type: String,
    label: "Confirm Password",
    min: 6,
    max: 100,
    optional: true,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    },
  },

  modifiedAt : {
    type:Date,
    label : "ModifiedAt",
    defaultValue : new Date(),
    optional: true,
  },

  createdAt : {
    type:Date,
    label : "CreatedAt",
    defaultValue: new Date(),
    optional: true,
  },

});

export default  User ;
