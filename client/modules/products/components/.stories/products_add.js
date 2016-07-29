import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsAdd from '../products_add';

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

storiesOf('Products Add', module)
  .add('default view', () => (
    <ProductsAdd productsAdd={action('add product')} categories={categories}/>
  ))
  .add('with errors', () => (
    <ProductsAdd productsAdd={action('add product')} categories={categories} formErrorObject={formErrorObject} mainError={mainError}/>
  ))
