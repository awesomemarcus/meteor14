import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Products = new Mongo.Collection('products');

export const ProductSchem = new SimpleSchema({
  catgory_id: {
    type: String,
    label: 'Category ID'
  },
  name: {
    type: String,
    label: 'Name',
    max: 10
  },
  description: {
    type: String,
    label: 'Description',
    max: 300
  },
  price: {
    type: Number,
    label: 'Price',
  },
  createdAt: {
    type: Date,
    label: 'Created At',
  },
  modifiedAt: {
    type: Date,
    label: 'Modified At',
  }
});

export default Products;
