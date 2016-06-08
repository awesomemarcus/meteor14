import Categories,{CategorySchem} from '/lib/collections/categories.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(data) {
         check(data, Object);

         data.createdBy = this.userId;
         data.createdAt = new Date();
         data.updatedAt = new Date();
         data.deleted = false;

         let Checker =  CategorySchem.namedContext("myContext");

         if(Checker.validate(data)) {
           return Categories.insert(data);
         }

         let catError = Checker.invalidKeys();

         _.map(catError, function (o) { //map errors on each fields
           throw new Meteor.Error(404, Checker.keyErrorMessage(o.name));
         });
    },
    'categoriesUpdate'(categoryId, data) {
         check(categoryId, String);
         check(data, Object);

         data.updatedAt = new Date();

         let Checker =  CategorySchem.namedContext("myContext");

         if(!Checker.validateOne(data, 'name')){
           throw new Meteor.Error(404, Checker.keyErrorMessage('name'));
         }

         if(!Checker.validateOne(data, 'updatedAt')){
           throw new Meteor.Error(404, Checker.keyErrorMessage('updatedAt'));
         }


        return Categories.update({_id:categoryId},{$set:data});

    },
    'categoriesDelete'(categoryId) {
      check(categoryId, String);

      return Categories.remove(categoryId);
    }
  });
}
