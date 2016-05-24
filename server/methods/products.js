import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {ProductSchem} from '/lib/collections/products.js';

export default function () {
  Meteor.methods({
    'insertProduct'(category_id, name, description, price) {
      console.log(name);
      const createdAt = new Date();
      // let formData = {
      //   category_id: 'asdsadasdasdas',
      //   name: 'dsadasdsadsa',
      //   description: 'sadasdsadsa',
      //   price: 3.0,
      // };
      //
      // let isValid = ProductSchem.namedContext("myContext").validate(formData);
      //
      // console.log(formData);
      // console.log(isValid);
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
    },

    'deleteProduct'(id) {
      Products.update({_id: id}, {$set: {deleted: true}});
    },

    'updateProduct'(id, category_id, name, description, price) {
      Products.update({_id: id}, {$set: {category_id: category_id, name: name, description: description, price: price, modifiedAt: new Date()}});
    },
  });
}
