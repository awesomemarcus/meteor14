import React from 'react';

class Signup extends React.Component {
  render() {
    const  errorField = this.props;
    const {getAgeOptions} = this.props;

    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <h2>User Signup</h2>
          {errorField.error ? <p  style={{color: 'red'}}>{errorField.error}</p> : null}
          <form className="form-horizontal" onSubmit={this.userSignup.bind(this)} onChange={this.clearError.bind(this)}>
            <div className={this.getInputWrapperClass(errorField["emails.$.address"])}>
              <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" ref="email" className="form-control" id="inputEmail3" placeholder="Email" />
                {errorField["emails.$.address"] ? <p style={{color: 'red'}}>{errorField["emails.$.address"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.password)}>
              <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" ref="password" className="form-control" id="inputPassword3" placeholder="Password" />
                {errorField.password ? <p style={{color: 'red'}}>{errorField.password}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField["profile.username"])}>
              <label for="inputUsername" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text"  ref="username" className="form-control" id="inputUsername" placeholder="Username" />
                {errorField["profile.username"] ? <p style={{color: 'red'}}>{errorField["profile.username"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField["profile.firstname"])}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" ref="firstname" className="form-control" id="inputFirstname" placeholder="Firstname" />
                {errorField["profile.firstname"] ? <p style={{color: 'red'}}>{errorField["profile.firstname"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField["profile.lastname"])}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" ref="lastname" className="form-control" id="inputLastname" placeholder="Lastname" />
                {errorField["profile.lastname"] ? <p style={{color: 'red'}}>{errorField["profile.lastname"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField["profile.gender"])}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" id="selectGender" ref="gender">
                  <option value>- select gender -</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errorField["profile.gender"] ? <p style={{color: 'red'}}>{errorField["profile.gender"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField["profile.age"])}>
              <label for="selectAge" className="col-sm-2 control-label">Age</label>
                <div className="col-sm-10">
                  <select className="form-control" id="selectAge" ref="age" >
                    <option value>- select age -</option>
                    {getAgeOptions().map(value => (
                      <option key={value.age} value={value.age}>{value.age}</option>
                    ))}
                  </select>
                  {errorField["profile.age"] ? <p style={{color: 'red'}}>{errorField["profile.age"]}</p> : null}
                </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-lg btn-block btn-primary">SUBMIT</button>
              </div>
            </div>
            </form>
          </div>
      </div>
    );
  }


  userSignup(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {userSignup} = this.props;
    const {email,password,lastname,firstname,gender,username,age} = this.refs;
    const formData = {
      "emails.$.address" : email.value,
      password : password.value,
      "profile.username" : username.value,
      "profile.firstname" : firstname.value,
      "profile.lastname" : lastname.value,
      "profile.gender" : gender.value,
      "profile.age" : parseInt(age.value),
      modifiedAt : new Date(),
      createdAt : new Date(),
    }

    userSignup(formData);
}

    clearError(e){
      if(e && e.preventDefault){
        e.preventDefault();
      }
      const {clearErrors} = this.props;
      clearErrors();
    }


  getInputWrapperClass(errorObj) {
    var classes = 'form-group';

    if (errorObj) {
      classes = 'form-group has-error';
    }


    return classes;

  }
}



export default Signup;
