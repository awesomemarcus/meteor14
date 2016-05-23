import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProductsUpdate from '../components/products_update.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');
  const descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');
  const priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');
  onData(null, {
    nameError,
    descriptionError,
    priceError,
  });
};

export const depsMapper = (context, actions) => ({
  updateProduct: actions.products.updateProduct,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsUpdate);
