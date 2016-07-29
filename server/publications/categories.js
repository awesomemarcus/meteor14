import { Categories, Products } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publishComposite('categoriesList',  (id) => {
    check(id, String);
    
    return {
      find: function() {
        return Categories.find({createdBy: id, isDeleted: false});
      },
      children: [
        {
            find: function(category) {
              return Products.find({category_id: category._id, isDeleted: false});
            },
        },
      ],
    };

  });

  Meteor.publish('categoriesSingle',  (category_id)  => {

    check(category_id, String);

    return Categories.find({_id:category_id, deleted: false});

  });
}
