import {Meteor} from 'meteor/meteor';
import {Products, Categories} from '/lib/collections';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('productList',  (id) => {
    check(id, String);

    return [
      Products.find({createdBy: id}),
      Categories.find(),
    ];
  });
}
