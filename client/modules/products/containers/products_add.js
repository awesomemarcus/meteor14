import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsAdd from '../components/products_add.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');
  const descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');
  const priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');
  onData(null, {
    nameError,
    descriptionError,
    priceError,
  });

  if(Meteor.subscribe('categoriesList').ready()){
    const categories = Collections.Categories.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {categories});
  }
    return;
};

export const depsMapper = (context, actions) => ({
  add: actions.products.add,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsAdd);
