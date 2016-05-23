export default {
  login({Meteor, LocalState},formData){

  },
  signup({Meteor, LocalState},formData){

  },
  clearErrors({LocalState}){
    return LocalState.set("login_error",null);
  },
}
