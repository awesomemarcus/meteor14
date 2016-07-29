import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsUpdate from '../products_update';

const formErrorObject = {
  name: "Name error message will display here.",
  description: "Description error message will display here.",
  price: "Price error message will display here.",
};

const mainError = "General error message will display here.";

const categories = [
  {_id: '1', name: 'Food'},
  {_id: '2', name: 'Business'},
  {_id: '3', name: 'Health'},
  {_id: '4', name: 'Technology'},
  {_id: '5', name: 'Ewan'},
];

const product = {
  _id: '1',
  category_id: '1',
  name: 'product 1',
  description: 'the quick brown fox jumps over the lazy dog',
  price: 10.50
};

storiesOf('Products Update', module)
  .add('default view', () => (
    <ProductsUpdate productsUpdate={action('update product')}
                    categories={categories}
                    product={product}
                    />
  ))
  .add('with errors', () => (
    <ProductsUpdate productsUpdate={action('update product')}
                    categories={categories}
                    product={product}
                    formErrorObject={formErrorObject}
                    mainError={mainError}
                    />
  ))
