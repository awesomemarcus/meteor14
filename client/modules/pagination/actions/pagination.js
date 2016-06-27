export default {
  setTotalPages({LocalState}, numOfItems) {
    Meteor.call('getTotalPage', function(err, result) {
      if(err) {
        return LocalState.set('ERR_FETCHING_TOTAL_PAGES', 'Unable to get total pages. Check the function totalPages()');
      }
      return LocalState.set('TOTAL_PAGES', Math.floor(result/numOfItems));
    });
  },

  currentPage({LocalState}, currentPage) {
    return LocalState.set('CURRENT_PAGE', parseInt(currentPage));
  },

  deleteRecord({LocalState}, id) {
    Meteor.call('delRec', id, function (err) {
      if(err) {
        return LocalState.set('DELETE_ERROR', err.reason);
      }
      return LocalState.set('DELETE_SUCCESS', 'Record Successfully Deleted');
    });
  },

  extendPages({LocalState}) {
    let newPageLength = 3;

    if(LocalState.get('INIT_PAGE_LOAD')) {
      newPageLength = LocalState.get('INIT_PAGE_LOAD') + 3;
    }

    LocalState.set('INIT_PAGE_LOAD', newPageLength);
    return newPageLength;
  },
}
