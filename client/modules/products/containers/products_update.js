import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsUpdate from '../components/products_update';

export const composer = ({context, productId, clearErrors}, onData) => {
  const {LocalState, Meteor, Collections, authCommon} = context();
  const {userId} = authCommon();
  const mainError = LocalState.get('mainError');
  const formErrorObject = LocalState.get('formErrorObject');

  if(Meteor.subscribe('productsSingle', productId, userId).ready()) {
    const product = Collections.Products.findOne({_id: productId});
    const categories = Collections.Categories.find({createdBy: userId, isDeleted: false}).fetch();
    onData(null, {productId,product, categories, mainError, formErrorObject});
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
