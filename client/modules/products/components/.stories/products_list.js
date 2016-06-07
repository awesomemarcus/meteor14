import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsList from '../products_list';

const prods = [
  {_id: '1', 'category.name': 'Food', name: 'product 1',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-4-12')},
  {_id: '2', 'category.name': 'Health', name: 'product 2',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-5-12')},
  {_id: '3', 'category.name': 'Business', name: 'product 3',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-3-15')},
  {_id: '4', 'category.name': 'Ewan', name: 'product 4',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-2-23')},
  {_id: '5', 'category.name': 'Food', name: 'product 5',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-4-12')},
];

storiesOf('Products List', module)
  .add('default view', () => (
    <ProductsList
        prods={prods}
        deleteProduct={action('delete product')}
    />
  ));
