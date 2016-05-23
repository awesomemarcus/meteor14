import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProductsView from '../components/products_view.jsx';

export const composer = ({context, productId}, onData) => {
  //const product = Collections.Products.findOne(productId);
  // onData(null, {product});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsView);
