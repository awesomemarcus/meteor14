export default {
  clearErrors({LocalState}) {
    LocalState.set('mainError', null);
    LocalState.set('mainSuccess', null);

    return true;
  },
}
