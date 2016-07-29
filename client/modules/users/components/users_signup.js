import React from 'react';


class UsersSignup extends React.Component {



  render() {
    const  {getAgeOptions, formErrorObject, mainError} = this.props;

    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">

          <h2><span className="glyphicon glyphicon-plus"></span> User Signup</h2>
          
          <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <div className={this.getInputWrapperClass(formErrorObject, "emails.$.address")}>

              <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" name="emails.$.address" ref="email" className="form-control" id="inputEmail" onBlur={this.handleBlur.bind(this)} placeholder="Email" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["emails.$.address"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "password")}>
              <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" name="password" ref="password" className="form-control" id="inputPassword" onBlur={this.handleBlur.bind(this)} placeholder="Password" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["password"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "confirmPassword")}>
              <label for="inputConfirmPassword" className="col-sm-2 control-label">Confirm Password</label>
              <div className="col-sm-10">
                <input type="password" name="confirmPassword" ref="confirmPassword" className="form-control" id="inputConfirmPassword" onBlur={this.handleBlur.bind(this)} placeholder="Confirm Password" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["confirmPassword"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.profilename")}>
              <label for="inputProfilename" className="col-sm-2 control-label">Profilename</label>
              <div className="col-sm-10">
                <input type="text" name="profile.profilename" ref="profilename" className="form-control" id="inputProfilename" onBlur={this.handleBlur.bind(this)} placeholder="Profilename" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.profilename"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.firstname")}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" name="profile.firstname" ref="firstname" className="form-control" id="inputFirstname" onBlur={this.handleBlur.bind(this)} placeholder="Firstname" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.firstname"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.lastname")}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" name="profile.lastname" ref="lastname" className="form-control" id="inputLastname" onBlur={this.handleBlur.bind(this)} placeholder="Lastname" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.lastname"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.gender")}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" name="profile.gender" id="selectGender" onBlur={this.handleBlur.bind(this)} ref="gender">
                  <option value>- select gender -</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.gender"]}</p> : null}
              </div>
            </div>


            <div className={this.getInputWrapperClass(formErrorObject, "profile.age")}>
              <label for="selectAge" className="col-sm-2 control-label">Age</label>
              <div className="col-sm-10">
                <select className="form-control" id="selectAge" name="profile.age" onBlur={this.handleBlur.bind(this)} ref="age">
                  <option value>- select age -</option>
                  { getAgeOptions ? getAgeOptions.map(value => (<option key={value.age} value={value.age}>{value.age}</option>))
                    : <option>Invalid Age Object</option> }
                </select>
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.age"]}</p> : null}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-lg btn-block btn-success">SUBMIT</button>
              </div>
              <div className="col-sm-offset-2 col-sm-10" style={{marginTop: '5px'}}>
                <a href="/users/login" className="btn btn-lg btn-block btn-default">LOGIN</a>
              </div>
            </div>
            </form>
          </div>
      </div>
    );
  }

  handleSubmit(e){
    if(e && e.preventDefault){
      e.preventDefault();

      const {userSignup} = this.props;

      let formData = {};
      const formDataSerialize = $(e.currentTarget).serializeArray();

      formDataSerialize.map(form => {
        formData[form.name] = form.value;
        if(form.name === "profile.age"){
          formData[form.name] = parseInt(form.value);
        }
      });

      userSignup(formData);
    }
  }

  handleBlur(e){
    if(e && e.preventDefault){
      const {userSignup} = this.props;

      const fieldName = e.currentTarget.name;
      let fieldValue = e.currentTarget.value;

      if(fieldName === 'profile.age') {
        fieldValue = parseInt(e.currentTarget.value);
      }

      userSignup(null, fieldName, fieldValue);
    }
  }


  getInputWrapperClass(errorObject, field) {
    var classes = 'form-group';

    if (errorObject && errorObject[field]) {
      classes = 'form-group has-error';
    }

    return classes;

  }

}


export default UsersSignup;
