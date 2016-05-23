import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProductsList from '../components/products_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  delete: actions.products.delete,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
