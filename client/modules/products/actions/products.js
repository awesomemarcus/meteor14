export default {

  productsAdd({LocalState,ProductSchem,formValidator, pushToObject}, productInfo=null, fieldName=null, fieldValue=null) {
    console.log('productInfo= ' + productInfo);
    console.log('fieldName= ' + fieldName);
    console.log('fieldValue= ' + fieldValue);

    let formObject = pushToObject(LocalState.get("formObject"), fieldName, fieldValue);

    if(productInfo != null) {
      formObject = productInfo;
    }

    LocalState.set("formObject", formObject);

    const result = formValidator(ProductSchem.namedContext("myContext"), formObject);
    const isValid = result.validate;
    console.log(result);
    // if(isValid && productInfo != null) {
    //
    //   Meteor.call("insertProduct", category_id, name, description, parseFloat(price), function (err) {
    //   if(err) {
    //     return LocalState.set('PRODUCTS_ADD_ERROR', err.error);
    //   }
    //
    //   FlowRouter.go('/products/list');
    // });
    //
    // }

  },

}
