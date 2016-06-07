import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesAdd from '../components/categories_add';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const nameError = LocalState.get('CATEGORIES_ADD_ERROR');
  const detailsError = LocalState.get('CATEGORIES_ADD_DETAILS_ERROR');
  onData(null, {
    nameError,
    detailsError,
  });

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  categoriesAdd:actions.categories.categoriesAdd,
  clearErrors: actions.categories.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesAdd);
