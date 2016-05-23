export default {
  add({LocalState},name, description, price) {
    if(!name) {
      return LocalState.set('PRODUCTS_ADD_NAME_ERROR', 'Product name is required.');
    }
    if(!description) {
      return LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', 'Product description is required.');
    }
    if(!price) {
      return LocalState.set('PRODUCTS_ADD_PRICE_ERROR', 'Product price is required.');
    }

    LocalState.set('PRODUCTS_ADD_NAME_ERROR', null);
    LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', null);
    LocalState.set('PRODUCTS_ADD_PRICE_ERROR', null);

  },

  delete({LocalState}, id) {

  },

  update({LocalState}, id) {

  },
}
