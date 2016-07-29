export default {
  categoriesAdd({Meteor,LocalState,FlowRouter,CategorySchem}, formData){
    let Checker =  CategorySchem.namedContext("myContext");
    const validate = Checker.validateOne(formData, 'name');

    if(validate) {
      Meteor.call("categoriesAdd", formData, function(error){
        if(error){
          return LocalState.set("mainError", error.reason);
        }
        FlowRouter.go('/categories/list');
        return LocalState.set("mainSuccess", "Category added successfully");
      });
    }

    LocalState.set("CATEGORIES_ADD_ERROR", Checker.keyErrorMessage('name'));
  },
  categoriesUpdate({Meteor,LocalState,FlowRouter,CategorySchem}, formData){
    let Checker =  CategorySchem.namedContext("myContext");
    const validate = Checker.validateOne(formData, 'name');

    if(validate) {
      const categoryId = FlowRouter.current().params.category_id;

      Meteor.call("categoriesUpdate", categoryId, formData, function(error){

        if(error){
           return LocalState.set("mainError", error.reason);
        }

        FlowRouter.go('/categories/list');
        return LocalState.set("mainSuccess", "Category updated successfully");
      });
    }

    LocalState.set("mainError", Checker.keyErrorMessage('name'));
  },
  categoriesDelete({Meteor,LocalState}, categoryId) {
    Meteor.call('categoriesDelete', categoryId, function(error) {
      if(error){
        return LocalState.set("mainError", error.reason);
      }

      return LocalState.set("mainSuccess", "Category removed successfully");
    });
  },
}
