import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import CategoriesAdd from '../categories_add.jsx';

storiesOf('Categories Add', module)
  .add('default view', () => (
    <CategoriesAdd categoriesAdd={action('categories add')} />
  )).add('name required error', () => (
    <CategoriesAdd categoriesAdd={action('categories add')} nameError="Category name is required."/>
  )).add('name min/max error', () => (
    <CategoriesAdd categoriesAdd={action('categories add')} nameError="Category name must contain 3-20 characters."/>
  )).add('name alpahumeric error', () => (
    <CategoriesAdd categoriesAdd={action('categories add')} nameError="Category name must contain alphanumeric characters only."/>
  )).add('details required error', () => (
    <CategoriesAdd categoriesAdd={action('categories add')} detailsError="Category details is required."/>
  )).add('details min/max error', () => (
    <CategoriesAdd categoriesAdd={action('categories add')} detailsError="Category details must contain 20-150 characters."/>
  ));
