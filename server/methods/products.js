import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {ProductSchem} from '/lib/collections/products.js';

export default function () {
  Meteor.methods({
    'insertProduct'(categoryid, name, description, price) {
      const createdAt = new Date();
      check(categoryid, String);
      check(name, String);
      check(description, String);
      check(price, String);
      check(createdAt, Date);

      const prodDetails = {
        categoryid,
        name,
        description,
        price,
        createdAt,
        modifiedAt: null,
        deleted: null,
        saving: true,
      };
      Products.insert(prodDetails);
    },

    'deleteProduct'(id) {
      check(id, String);
      Products.update({_id: id}, {$set: {deleted: true}});
    },

    'updateProduct'(id, categoryid, name, description, price) {
      check(id, String);
      check(categoryid, String);
      check(name, String);
      check(description, String);
      check(price, Number);
      Products.update({_id: id}, {$set: {category_id: categoryid, name: name, description: description, price: price, modifiedAt: new Date()}});
    },
  });
}
