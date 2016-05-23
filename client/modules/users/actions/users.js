import UsersSchema from '/lib/collections/users.js';


export default {
  userSignup({Meteor, LocalState,FlowRouter},formData){
      LocalState.set("profile.username",null);
      LocalState.set("profile.firstname",null);
      LocalState.set("profile.lastname",null);
      LocalState.set("emails.$.address",null);
      LocalState.set("password",null);
      LocalState.set("profile.age",null);
      LocalState.set("profile.gender",null) ;
      LocalState.set("main_error",null) ;

      let Checker =  UsersSchema.namedContext("myContext");
      let schemaHasNoError = Checker.validate(formData);
      let signUpErrors = Checker.invalidKeys();
      _.map(signUpErrors, function (o) { //map errors on each fields
          LocalState.set(o.name,Checker.keyErrorMessage(o.name));
      });



      if(schemaHasNoError){
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
    LocalState.set("main_error",null) ;
    let Checker =  UsersSchema.namedContext("myContext");
    let loginUser = true ;
    
    if(!Checker.validateOne(formData,'emails.$.address')){
      loginUser = false;
      return  LocalState.set("main_error", Checker.keyErrorMessage("emails.$.address"));
    }

    if(!Checker.validateOne(formData,"password")){
      loginUser = false;
      return  LocalState.set("main_error", Checker.keyErrorMessage("password"));
    }

    if(loginUser){
      Meteor.loginWithPassword(formData["emails.$.address"], formData["password"], (err)=>{
        if(err){
          return LocalState.set("main_error",err.message);
        }
        FlowRouter.go("/");
      })
    }

  },
  clearErrors({LocalState}){
    LocalState.set("profile.username",null);
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
