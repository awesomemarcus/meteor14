import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(data) {
         Categories.insert({
           name : data.name,
           details : data.details,
           modifiedAt : new Date(),
           createdAt : new Date(),
         });
    },
    'categoriesUpdate'(data) {
         Categories.update({_id:data._id},{$set:{
           name : data.name,
           details : data.details,
           modifiedAt : new Date(),
           createdAt : new Date(),
         }});
    }
  });
}
