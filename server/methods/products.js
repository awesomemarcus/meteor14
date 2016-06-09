import Products,{ProductSchem} from '/lib/collections/products.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'insertProduct'(category_id, name, description, price) {

      /* use only for testing latency compensation */
      //Meteor._sleepForMs(5000);

      const createdAt = new Date();

      check(category_id, String);
      check(name, String);
      check(description, String);
      check(parseInt(price), Number);
      check(createdAt, Date);

      let formData = {
        createdBy: Meteor.userId(),
        category_id: category_id,
        name:name,
        description:description,
        price:parseInt(price),
        updatedAt: new Date(),
        createdAt: createdAt,
        deleted: false,
      };

      let Checker =  ProductSchem.namedContext("myContext");

      if(Checker.validate(formData)) {
        return Products.insert(formData);
      }

      let prodError = Checker.invalidKeys();

      _.map(prodError, function (o) { //map errors on each fields
        throw new Meteor.Error(Checker.keyErrorMessage(o.name));
      });

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
