
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('paginationList', function (limit) {
    check(limit, Number);
    return Meteor.users.find({_id: {$ne: this.userId}}, {limit: limit, sort: {createdAt: -1}});
  });
}
