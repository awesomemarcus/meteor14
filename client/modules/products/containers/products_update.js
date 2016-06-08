import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsUpdate from '../components/products_update';

export const composer = ({context, productId, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  // const nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');
  // const descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');
  // const priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');
  const error =  LocalState.get('ERROR');
  if(Meteor.subscribe('productList', Meteor.userId()).ready()){
    const product = Collections.Products.findOne({_id: productId},{sort:{createdAt:-1}});
    const categories = Collections.Categories.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {product, categories, error});
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  updateProduct: actions.products.updateProduct,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsUpdate);
