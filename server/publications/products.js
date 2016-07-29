import {Meteor} from 'meteor/meteor';
import {Products, Categories} from '/lib/collections';
import {check} from 'meteor/check';

export default function () {

  Meteor.publishComposite('productsList',  (id) => {
    check(id, String);
    return {
      find: function() {
        return Products.find({createdBy: id, isDeleted: false});
      },
      children: [
        {
          find: function(product) {
            return Categories.find({_id: product.category_id, isDeleted: false});
          },
        },
      ],
    };
  });

  Meteor.publishComposite('productsSingle', (id, userid) => {
    check(id, String);
    check(userid, String);

    return {
      find: function() {
        return Products.find({_id: id});
      },
      children: [
        {
          find: function(product) {
            return Categories.find({_id: product.category_id, isDeleted: false});
          },
        },
      ],
    };

  });

}
