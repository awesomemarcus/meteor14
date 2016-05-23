import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Products from '/lib/collections';

import ProductsView from '../components/products_view.jsx';

export const composer = ({context, productId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('productList').ready()){
    const product = Collections.Products.findOne({},{sort:{createdAt:-1}});
        onData(null, {product});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsView);
