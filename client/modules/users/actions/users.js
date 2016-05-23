export default {
  login({Meteor, LocalState},formData){

  },
  signup({Meteor, LocalState},formData){

  },
  getAgeOptions(){
    const ageOptions = [];

    for (let minAge = 18; minAge <= 99; minAge++) {
      ageOptions.push({age: minAge});
    }

    return ageOptions;
  },
  clearErrors({LocalState}){
    return LocalState.set("login_error",null);
  },
}
