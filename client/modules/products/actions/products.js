export default {
  add({LocalState},category_id, name, description, price) {
    console.log('test');
    if(!name) {
      return LocalState.set('PRODUCTS_ADD_NAME_ERROR', 'Product name is required.');
    }
    if(!description) {
      return LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', 'Product description is required.');
    }
    if(!price) {
      return LocalState.set('PRODUCTS_ADD_PRICE_ERROR', 'Product price is required.');
    }

    Meteor.call('insertProduct', category_id, name, description, price, function(err) {
      if(err) {
        console.log(err);
        return LocalState.set('PRODUCTS_ADD_ERROR', 'Failed to save product.');
      }
      console.log('success');
    });

    LocalState.set('PRODUCTS_ADD_NAME_ERROR', null);
    LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', null);
    LocalState.set('PRODUCTS_ADD_PRICE_ERROR', null);

  },

  deleteProduct({LocalState}, id) {

  },

  update({LocalState}, id) {

  },
}
