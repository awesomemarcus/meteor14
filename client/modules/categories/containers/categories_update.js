import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesUpdate from '../components/categories_update';

export const composer = ({context, category_id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const nameError = LocalState.get('CATEGORIES_ADD_ERROR');
  const detailsError = LocalState.get('CATEGORIES_ADD_DETAILS_ERROR');

  if(Meteor.subscribe("categoriesSingle", category_id).ready()){
    const category = Collections.Categories.findOne(category_id);
    onData(null, {category, nameError, detailsError});
  }

};

export const depsMapper = (context, actions) => ({
  categoriesUpdate:actions.categories.categoriesUpdate,
  clearErrors: actions.categories.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesUpdate);
