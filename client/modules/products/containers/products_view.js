import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsView from '../components/products_view';

export const composer = ({context, productId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('productsSingle', productId).ready()) {
    const product = Collections.Products.findOne({_id: productId});
    onData(null, {product});
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsView);
