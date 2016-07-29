import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsView from '../components/products_view';

export const composer = ({context, productId}, onData) => {
  const {Meteor, Collections, authCommon} = context();
  const {userId} = authCommon();
  if(Meteor.subscribe('productsSingle', productId, userId).ready()) {
    const product = Collections.Products.findOne({_id: productId});
    product.category_name = Collections.Categories.findOne({_id: product.category_id}).name;
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
