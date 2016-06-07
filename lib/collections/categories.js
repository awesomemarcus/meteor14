import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Categories = new Mongo.Collection('categories');

export const CategorySchem = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    min: 3,
    max: 10,
  },
  createdBy: {
    type: String,
    label: 'Created By',
    min: 17,
    max: 17,
  },
  createdAt: {
    type: Date,
    label: 'Created At',
  },
  updatedAt: {
    type: Date,
    label: 'Updated At',
  },
  deleted: {
    type: Boolean,
    label: 'Deleted',
  },
});

export default Categories;
