export default {

  userSignup({Meteor, LocalState,FlowRouter, User, formValidator, pushToObject}, formData, fieldName, fieldValue){

    /*start Form Object Definition*/
    let object = LocalState.get("formObject");

    let formObject = pushToObject(object, fieldName, fieldValue);

    if(formData){
      formObject = formData;
    }

    LocalState.set("formObject", formObject);
    /*end Form Object Definition*/

    /*Validating form object*/
    const userContext = User.namedContext("myContext");
    const result = formValidator(userContext, formObject);
    /*Validating form object*/

    if(result.validate && formData){
      Meteor.call("usersSignup",formObject,(err) => {
        if(err){
          return LocalState.set("mainError", err.message);
        }

        Meteor.loginWithPassword(formObject["emails.$.address"], formObject["password"], (err)=>{
          if(err){
            return LocalState.set("mainError",err.message);
          }
          FlowRouter.go("/");
        })

      });
    }

    LocalState.set("formErrorObject", result.errorObject);
  },

  userLogin({Meteor, LocalState,FlowRouter},formData){

      Meteor.loginWithPassword(formData["emails.$.address"], formData["password"], (err)=>{
        if(err){
          return LocalState.set("main_error",err.message);
        }
        FlowRouter.go("/");
      })

  },

  clearOneError({LocalState},key){
    LocalState.set(key,null);
    return  true;
  },

  clearErrors({LocalState}){
    LocalState.set("formErrorObject",null);
    LocalState.set("mainError",null) ;
    return  true;
  },
}
