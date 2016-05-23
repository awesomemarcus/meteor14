import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';



export default function () {
  Meteor.methods({
    'products.add'(data) {
        console.log("Method is called");


    }
  });
}
