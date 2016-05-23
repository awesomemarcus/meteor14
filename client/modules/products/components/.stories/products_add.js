import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsAdd from '../products_add.jsx';

storiesOf('Products Add', module)
  .add('default view', () => (
    <ProductsAdd />
)).add('name required error', () => (
  <ProductsAdd nameError="Name is required."/>
)).add('name min/max error', () => (
  <ProductsAdd nameError="Name must contain 3-20 characters."/>
));
