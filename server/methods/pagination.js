import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.methods({
    'getTotalPage'() {
      return Meteor.users.find().count();
    },

    'delRec'(id) {
      check(id, String);
      Meteor.users.remove({_id: id});
    },
  });
}
