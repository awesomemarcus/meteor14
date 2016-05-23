import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {Products} from '/lib/collections';

export default function () {

  Meteor.publish('productList',  () => {
    return Products.find({});
  });

}
