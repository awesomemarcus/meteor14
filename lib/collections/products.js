import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Products = new Mongo.Collection('products');

export const ProductSchem = new SimpleSchema({
  createdBy: {
    type: String,
    label: 'Created By',
    min: 17,
    max: 17,
  },
  category_id: {
    type: String,
    label: 'Category ID',
    min: 17,
    max: 17,
  },
  name: {
    type: String,
    label: 'Name',
    max: 10,
    min: 3,
    // regEx: /^[a-zA-Z0-9]+$/,
  },
  description: {
    type: String,
    label: 'Description',
    max: 300,
    min: 10,
  },
  price: {
    type: Number,
    decimal: true,
    label: 'Price',
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    optional: true,
  },
  updatedAt: {
    type: Date,
    label: 'Modified At',
    optional: true,
  },
  deleted: {
    type: Boolean,
    label: 'Deleted',
    optional: true,
  },
});

export default Products;
