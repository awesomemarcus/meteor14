import Products,{ProductSchem} from '/lib/collections/products.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'productsAdd'(productInfo) {

      check(productInfo, {
        category_id: String,
        name: String,
        description: String,
        price: Number,
      });

      productInfo.createdBy = this.userId;
      productInfo.createdAt = new Date();
      productInfo.updatedAt = new Date();
      productInfo.isDeleted = false;
      Products.insert(productInfo);
    },

    'productsDelete'(id) {
      check(id, String);
      Products.update({_id: id}, {$set: {isDeleted: true}});
    },

    'updateProduct'(id, categoryid, name, description, price) {
      check(id, String);
      check(categoryid, String);
      check(name, String);
      check(description, String);
      check(price, Number);

      let Checker =  ProductSchem.namedContext("myContext");

      if(!Checker.validateOne({category_id: categoryid}, 'category_id')){
        throw new Meteor.Error(404, Checker.keyErrorMessage('category_id'));
      }

      if(!Checker.validateOne({name: name}, 'name')){
        throw new Meteor.Error(404, Checker.keyErrorMessage('name'));
      }

      if(!Checker.validateOne({description: description}, 'description')){
        throw new Meteor.Error(404, Checker.keyErrorMessage('description'));
      }

      if(!Checker.validateOne({price: price}, 'price')){
        throw new Meteor.Error(404, Checker.keyErrorMessage('price'));
      }

      Products.update({_id: id}, {$set: {category_id: categoryid, name: name, description: description, price: price, updatedAt: new Date()}});
    },
  });
}
