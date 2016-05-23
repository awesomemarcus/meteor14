import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CategoriesList from '../components/categories_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('categoriesList').ready()){
    const categories = Collections.Categories.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {categories});
  }
    return;
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesList);
