import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProductsList from '../components/products_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('productList').ready()){
    const prods = Collections.Products.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {prods});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
