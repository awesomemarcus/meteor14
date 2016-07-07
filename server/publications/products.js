import {Meteor} from 'meteor/meteor';
import {Products, Categories} from '/lib/collections';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('productsList',  (id) => {
    check(id, String);
    return [
      Products.find({createdBy: id, isDeleted: false}),
      Categories.find({createdBy: id, isDeleted: false}),
    ];
  });

  Meteor.publish('productsSingle', (id) => {
    check(id, String);
    return [
      Products.find({_id: id}),
    ];
  });

}
