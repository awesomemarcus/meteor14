import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsAdd from '../components/products_add';

export const composer = ({context, clearProductErrors}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const formErrorObject = LocalState.get('formErrorObject');

  if(Meteor.subscribe('categoriesList', Meteor.userId()).ready()){
    const categories = Collections.Categories.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {categories, formErrorObject});
  }
    return clearProductErrors;
};

export const depsMapper = (context, actions) => ({
  productsAdd: actions.products.productsAdd,
  clearProductErrors: actions.products.clearProductErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsAdd);
