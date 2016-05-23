import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CategoriesAdd from '../components/categories_add.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('categories_add_error');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  categoriesAdd:actions.categories.categoriesAdd,
  clearErrors: actions.categories.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesAdd);
