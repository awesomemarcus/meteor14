import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Pagination from '../components/pagination.js';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState} = context();
  const loadPageInit = typeof LocalState.get('INIT_PAGE_LOAD') === 'undefined'? 3 : LocalState.get('INIT_PAGE_LOAD');
  const totalPages = LocalState.get('TOTAL_PAGES');
  const recordDeleteError = LocalState.get('DELETE_ERROR');
  const recordDeleteSuccess = LocalState.get('DELETE_SUCCESS');
  const currentPageLimit = typeof LocalState.get('CURRENT_PAGE') === 'undefined' ? 2 : LocalState.get('CURRENT_PAGE')*2;
  const skip = currentPageLimit -2;

  if(Meteor.subscribe('paginationList', currentPageLimit).ready()) {
    const pageList = Meteor.users.find({_id: {$ne: Meteor.userId()}}, {skip:skip, limit: currentPageLimit, sort: {createdAt: -1}}).fetch();
    onData(null, {
      totalPages,
      currentPageLimit,
      pageList,
      skip,
      recordDeleteError,
      recordDeleteSuccess,
      loadPageInit,
    });
  } else {
    const loading = 'loading......'
    onData(null, {loading});
  }
};

export const depsMapper = (context, actions) => ({
  setTotalPages: actions.pagination.setTotalPages,
  currentPage: actions.pagination.currentPage,
  deleteRecord: actions.pagination.deleteRecord,
  extendPages: actions.pagination.extendPages,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Pagination);
