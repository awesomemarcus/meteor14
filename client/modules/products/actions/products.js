export default {

  productsAdd({FlowRouter,LocalState,ProductSchem,formValidator, pushToObject}, productInfo=null, fieldName=null, fieldValue=null) {
    let formObject = pushToObject(LocalState.get("formObject"), fieldName, fieldValue);

    if(productInfo != null) {
      formObject = productInfo;
    }

    if(fieldName === 'price') {
      formObject.price = parseFloat(fieldValue);
    }

    LocalState.set("formObject", formObject);

    const result = formValidator(ProductSchem.namedContext("myContext"), formObject);
    const isValid = result.validate;

    if(isValid && productInfo != null) {

      Meteor.call("productsAdd", productInfo, function (err) {
        if(err) {
          return LocalState.set('mainError', err.error);
        }
        FlowRouter.go('/products/list');
      });

    }

    LocalState.set("formErrorObject", result.errorObject);

  },

  productsDelete({Meteor, LocalState},productId) {
    Meteor.call('productsDelete', productId, (err) => {
      if(err) {
        return LocalState.set('mainError', err.reason);
      }
      LocalState.set('mainError', null);
    });
  },

  productsUpdate({FlowRouter,LocalState,ProductSchem,formValidator, pushToObject},productId, productInfo=null, fieldName=null, fieldValue=null) {
    let formObject = pushToObject(LocalState.get("formObject"), fieldName, fieldValue);

    if(productInfo != null) {
      formObject = productInfo;
    }

    if(fieldName === 'price') {
      formObject.price = parseFloat(fieldValue);
    }

    LocalState.set("formObject", formObject);

    const result = formValidator(ProductSchem.namedContext("myContext"), formObject);
    const isValid = result.validate;

    if(isValid && productInfo != null) {

      Meteor.call("productsUpdate", productId,productInfo, function (err) {
        if(err) {
          return LocalState.set('mainError', err.error);
        }
        FlowRouter.go('/products/list');
      });

    }

    LocalState.set("formErrorObject", result.errorObject);
  },

  clearProductErrors({LocalState}) {
    return [
      LocalState.set('formErrorObject', null),
      LocalState.set('mainError', null),
    ];
  },

}
