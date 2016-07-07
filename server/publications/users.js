import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.current', function () {
    return Meteor.users.find(this.userId);
  });

  Meteor.publish('usersProfile', function (userId) {
    check(userId, String);
    return Meteor.users.find(userId, {fields: {'profile.profilename': 1, 'profile.firstname': 1, 'profile.lastname': 1, 'profile.gender': 1, 'profile.age': 1}});
  });
}
