export default {
  categoriesAdd({Meteor,LocalState,FlowRouter,CategorySchem}, formData){
    let Checker =  CategorySchem.namedContext("myContext");
    const validate = Checker.validateOne(formData, 'name');

    LocalState.set("CATEGORIES_ADD_ERROR", null);
    LocalState.set("CATEGORIES_ADD_DETAILS_ERROR", null);

    if(validate) {
      Meteor.call("categoriesAdd", formData, function(error){
        if(error){
          return LocalState.set("CATEGORIES_ADD_DETAILS_ERROR", error.reason);
        }
        FlowRouter.go('/categories/list');
      });
    }

    LocalState.set("CATEGORIES_ADD_ERROR", Checker.keyErrorMessage('name'));
  },
  categoriesUpdate({Meteor,LocalState,FlowRouter,CategorySchem}, formData){
    let Checker =  CategorySchem.namedContext("myContext");
    const validate = Checker.validateOne(formData, 'name');

    LocalState.set("CATEGORIES_ADD_ERROR", null);
    LocalState.set("CATEGORIES_ADD_DETAILS_ERROR", null);

    if(validate) {
      const categoryId = FlowRouter.current().params.category_id;

      Meteor.call("categoriesUpdate", categoryId, formData, function(error){

        if(error){
           return LocalState.set("CATEGORIES_ADD_DETAILS_ERROR", error.reason);
        }

        FlowRouter.go('/categories/list');
      });
    }

    LocalState.set("CATEGORIES_ADD_ERROR", Checker.keyErrorMessage('name'));
  },
  categoriesDelete() {

  },
  clearErrors({LocalState}){

    return [
      LocalState.set("CATEGORIES_ADD_ERROR", null),
      LocalState.set("CATEGORIES_ADD_DETAILS_ERROR", null),
    ];
  },
}
