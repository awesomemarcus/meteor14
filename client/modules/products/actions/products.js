import {ProductSchem} from '/lib/collections/products.js';

export default {
  add({LocalState},category_id, name, description, price) {
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
    });

    LocalState.set('PRODUCTS_ADD_NAME_ERROR', null);
    LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', null);
    LocalState.set('PRODUCTS_ADD_PRICE_ERROR', null);

  },

  deleteProduct({LocalState}, id) {
    Meteor.call("deleteProduct", id, function (err) {
      if(err) {
        return LocalState.set('PRODUCTS_ADD_ERROR', 'Unable to delete product.');
      }
    });
  },

  updateProduct({LocalState}, category_id, name, description, price) {
    var id = FlowRouter.current().params.productId;
    Meteor.call("updateProduct", id, category_id, name, description, price, function (err) {
      if(err) {
        return LocalState.set('PRODUCTS_UPDATE_ERROR', 'Unable to update product.');
      }
    });
  },
}
