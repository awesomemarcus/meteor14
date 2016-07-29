import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsList from '../components/products_list';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('productsList', Meteor.userId()).ready()){

    const prods = Collections.Products.find({},{sort:{createdAt:-1}}).fetch().map(function(product){

      product.category_name = Collections.Categories.findOne({_id: product.category_id}, {fields: {name:1}}).name;

      return product;
    });

    onData(null, {prods});

  }
};

export const depsMapper = (context, actions) => ({
  productsDelete: actions.products.productsDelete,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
