import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {

  Meteor.publish('categoriesList',  () => {
    return Categories.find({});
  });

  Meteor.publish('categoriesSingle',  (category_id)  => {
    return Categories.find({_id:category_id});
  });

}
