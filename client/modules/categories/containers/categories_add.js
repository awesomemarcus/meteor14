import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesAdd from '../components/categories_add';

export const composer = ({context}, onData) => {

  onData(null, {});

};

export const depsMapper = (context, actions) => ({
  categoriesAdd:actions.categories.categoriesAdd,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesAdd);
