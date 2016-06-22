


export default {
  validateInputField({LocalState, User}, field, value){
    var key = "";
    var userObj = {};

    key = "profile." + field;
    userObj[key] = value;

    if(field === 'email'){
      key = "emails.$.address";
      userObj[key] = value;
    }

    if(field === 'password'){
      key = field;
      userObj[key] = value;
    }

    let Checker =  User.namedContext("myContext");
    const validate = Checker.validateOne(userObj, key);

    LocalState.set(key, null);

    if(!validate) {
      LocalState.set(key, Checker.keyErrorMessage(key));
    }

  },

  userSignup({Meteor, LocalState,FlowRouter, User, _},formData,eventType){


     let Checker =  User.namedContext("myContext");
     let schemaHasNoError = true;
    //loop to all dataform submitted and validate each
    for(let key in formData) {
        if(!Checker.validateOne(formData, key)){
              schemaHasNoError = false; //formData will not be submitted
              LocalState.set(key,Checker.keyErrorMessage(key));
        }
    }



      if(schemaHasNoError && eventType == "submit"){

        Meteor.call("usersSignup",formData,(err)=> {
          if(err){
            return LocalState.set("main_error",err.message);
          }

          Meteor.loginWithPassword(formData["emails.$.address"], formData["password"], (err)=>{
            if(err){
              return LocalState.set("main_error",err.message);
            }
            FlowRouter.go("/");
          })

        })
      }



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
    LocalState.set("profile.profilename",null);
    LocalState.set("profile.firstname",null);
    LocalState.set("profile.lastname",null);
    LocalState.set("emails.$.address",null);
    LocalState.set("password",null);
    LocalState.set("profile.age",null);
    LocalState.set("profile.gender",null) ;
    LocalState.set("main_error",null) ;
    return  true;
  },
}
