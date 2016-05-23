import React from 'react';

class Signup extends React.Component {
  render() {

    const {signup} = this.props;
    const formData = {
      "emails.$.address" :"junski@",
      password: "password",
      "profile.username" : "jun",
      "profile.firstname" : "jun",
      "profile.lastname" : "ski",
      "profile.gender" : "female",
      "profile.age" : 20,
      modifiedAt : new Date(),
      createdAt : new Date(),
    };

    signup(formData);


    const {error} = this.props;
    const {errorField} = this.props;
    const {getAgeOptions} = this.props;

    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <h2>User Signup</h2>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form className="form-horizontal" onSubmit={this.createAccount.bind(this)}>
            <div className={this.getInputWrapperClass(errorField.email)}>
              <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                {errorField.email ? <p style={{color: 'red'}}>{errorField.email}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.password)}>
              <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                {errorField.password ? <p style={{color: 'red'}}>{errorField.password}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.username)}>
              <label for="inputUsername" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                {errorField.username ? <p style={{color: 'red'}}>{errorField.username}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.firstname)}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputFirstname" placeholder="Firstname" />
                {errorField.firstname ? <p style={{color: 'red'}}>{errorField.firstname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.lastname)}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputLastname" placeholder="Lastname" />
                {errorField.lastname ? <p style={{color: 'red'}}>{errorField.lastname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.gender)}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" id="selectGender" >
                  <option value>- select gender -</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errorField.gender ? <p style={{color: 'red'}}>{errorField.gender}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.age)}>
              <label for="selectAge" className="col-sm-2 control-label">Age</label>
              <div className="col-sm-10">
                <select className="form-control" id="selectAge" >
                  <option value>- select age -</option>
                  {getAgeOptions().map(value => (
                    <option value={value.age}>{value.age}</option>
                  ))}
                </select>
                {errorField.age ? <p style={{color: 'red'}}>{errorField.age}</p> : null}
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


  signup(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
}

  createAccount(event) {
    if (event && event.preventDefault) {
      event.preventDefault();

    }
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
