import Products from '/lib/collections/products.js';
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

    'productsUpdate'(productInfo) {

      check(productInfo, {
        _id: String,
        category_id: String,
        name: String,
        description: String,
        price: Number,
      });
      productInfo.updatedAt = new Date();
      Products.update({_id: productInfo._id}, {
        $set: productInfo,
      });
    },
  });
}
