import Products,{ProductSchem} from '/lib/collections/products.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'insertProduct'(category_id, name, description, price) {
      const createdAt = new Date();

      check(category_id, String);
      check(name, String);
      check(description, String);
      check(price, String);
      check(createdAt, Date);

      let formData = {
        createdBy: Meteor.userId(),
        category_id: category_id,
        name:name,
        description:description,
        price:Number(price),
        updatedAt: new Date(),
        createdAt: createdAt,
        deleted: false,
      };

      let Checker =  ProductSchem.namedContext("myContext");
      const validate = Checker.validate(formData);
      if(validate) {
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
      Products.update({_id: id}, {$set: {category_id: categoryid, name: name, description: description, price: price, modifiedAt: new Date()}});
    },
  });
}
