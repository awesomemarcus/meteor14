import {Meteor} from 'meteor/meteor';
import {Products, Categories} from '/lib/collections';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('productList',  (id) => {
    return [
      Products.find({user_id: id}),
      Categories.find(),
    ];
  });
}
