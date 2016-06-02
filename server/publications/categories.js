import { Categories, Products } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('categoriesList',  (id) => {

    return [
      Categories.find(),
      Products.find({user_id: id}),
    ];

  });

  Meteor.publish('categoriesSingle',  (category_id)  => {

    check(category_id, String);

    return Categories.find({_id:category_id});

  });
}
