import {SimpleSchema} from 'meteor/aldeed:simple-schema';
/**
 * Users schema
 */
const UsersSchema = new SimpleSchema({
  profile: {
    type: Object,
    optional: true,
    blackbox: true,
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
},

"emails.$.address": {
  type: String,
  regEx: SimpleSchema.RegEx.Email,
},

"emails.$.verified": {
  type: Boolean,
},

password: {
    type: String,
    label: "Password",
    min: 6,
    max: 20,
  },

modifiedAt : {
  type:Date,
},

createdAt : {
  type:Date,
  defaultValue: new Date(),
},


});

export default { UsersSchema };
