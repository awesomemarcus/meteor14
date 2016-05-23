import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'insertProduct'(category_id, name, description, price) {
      const createdAt = new Date();
      const prodDetails = {
        category_id,
        name,
        description,
        price,
        createdAt,
        modifiedAt: null,
        deleted: null,
        saving: true
      };
      Products.insert(prodDetails);
    }
  });
}
