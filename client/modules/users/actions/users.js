import UsersSchema from '/lib/collections/users.js';


export default {
  validateInputField({LocalState}, field, value){
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

    let Checker =  UsersSchema.namedContext("myContext");
    const validate = Checker.validateOne(userObj, key);

    LocalState.set(key, null);

    if(!validate) {
      LocalState.set(key, Checker.keyErrorMessage(key));
    }

  },
  signup({Meteor, LocalState,FlowRouter},formData){
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
        signUpErrors = _.map(signUpErrors, function (o) {
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
  login({Meteor, LocalState},formData){
    Meteor.call('usersLogin',formData);
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
