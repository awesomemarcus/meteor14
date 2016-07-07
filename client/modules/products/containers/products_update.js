import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsUpdate from '../components/products_update';

export const composer = ({context, productId, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const mainError = LocalState.get('mainError');
  const formErrorObject = LocalState.get('formErrorObject');

  if( Meteor.subscribe('productsSingle', productId).ready() ) {
    const product = Collections.Products.findOne({_id: productId});
    const categories = Collections.Categories.find().fetch();
    onData(null, {product, categories, formErrorObject, mainError});
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  productsUpdate: actions.products.productsUpdate,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsUpdate);
