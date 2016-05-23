import {ProductSchem} from '/lib/collections/products.js';

export default {
  add({LocalState},category_id, name, description, price) {
    if(!name || !description || !price) {
      LocalState.set('PRODUCTS_ADD_NAME_ERROR', 'Product name is required.');
      LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', 'Product description is required.');
      LocalState.set('PRODUCTS_ADD_PRICE_ERROR', 'Product price is required.');
      return;
    }

    let formData = {
      name: name,
      description: description,
      price: Number(price),
    }

    let validateProdName = ProductSchem.namedContext("myContext").validateOne(formData, "name");
    console.log(validateProdName);
    if(validateProdName === false || validateDescpt === false || validatePrice === false) {
      document.getElementById('prodName').style.border = '1px solid red';
      document.getElementById('nameErrorMsg').style.color = 'red';
      document.getElementById('nameErrorMsg').innerHTML = 'Product name should me min of 3 and max of 10 characters.';
      document.getElementById('prodDescription').style.border = '1px solid red';
      document.getElementById('descriptionErrorMsg').style.color = 'red';
      document.getElementById('descriptionErrorMsg').innerHTML = 'Description should me min of 10 and max of 100 characters.';
      document.getElementById('prodPrice').style.border = '1px solid red';
      document.getElementById('priceErrorMsg').style.color = 'red';
      document.getElementById('priceErrorMsg').innerHTML = 'Price must be a number';
    }

    // let validateDescpt = ProductSchem.namedContext("myContext").validateOne(formData, "description");
    // if(validateDescpt === false) {
    //   document.getElementById('prodDescription').style.border = '1px solid red';
    //   document.getElementById('descriptionErrorMsg').style.color = 'red';
    //   document.getElementById('descriptionErrorMsg').innerHTML = 'Description should me min of 10 and max of 100 characters.';
    // }
    //
    // let validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");
    // if(validatePrice === false) {
    //   document.getElementById('prodPrice').style.border = '1px solid red';
    //   document.getElementById('priceErrorMsg').style.color = 'red';
    //   document.getElementById('priceErrorMsg').innerHTML = 'Price must be a number';
    // }
    // LocalState.set('PRODUCTS_ADD_NAME_ERROR', null);
    // LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', null);
    // LocalState.set('PRODUCTS_ADD_PRICE_ERROR', null);

    // Meteor.call('insertProduct', category_id, name, description, price, function(err) {
    //   if(err) {
    //     console.log(err);
    //     return LocalState.set('PRODUCTS_ADD_ERROR', 'Failed to save product.');
    //   }
    // });

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
