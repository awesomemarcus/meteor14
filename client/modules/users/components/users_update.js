import React from 'react';

class UsersUpdate extends React.Component {
  render() {
    const  {errorField, getAgeOptions, user} = this.props;
    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">

          <h2><span className="glyphicon glyphicon-edit"></span> User Update</h2>
          {errorField.error ? <p  style={{color: 'red'}}>{errorField.error}</p> : null}
          <form className="form-horizontal" onSubmit={this.userUpdateAccount.bind(this)}>
            <div className={this.getInputWrapperClass(errorField.profilename)}>
              <label for="inputProfilename" className="col-sm-2 control-label">Profilename</label>
              <div className="col-sm-10">
                <input type="text" name="profilename" ref="profilename" className="form-control" id="inputProfilename" defaultValue={user.profile.profilename} onBlur={this.validateField.bind(this)} placeholder="Profilename" />
                {errorField.profilename ? <p style={{color: 'red'}}>{errorField.profilename}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.firstname)}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" name="firstname" ref="firstname" className="form-control" id="inputFirstname" defaultValue={user.profile.firstname} onBlur={this.validateField.bind(this)} placeholder="Firstname" />
                {errorField.firstname ? <p style={{color: 'red'}}>{errorField.firstname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.lastname)}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" name="lastname" ref="lastname" className="form-control" id="inputLastname" defaultValue={user.profile.lastname}
                onBlur={this.validateField.bind(this)} placeholder="Lastname" />
                {errorField.lastname ? <p style={{color: 'red'}}>{errorField.lastname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.gender)}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" name="gender" id="selectGender" defaultValue={user.profile.gender} onBlur={this.validateField.bind(this)} ref="gender">
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
                <select className="form-control" id="selectAge" defaultValue={user.profile.age} name="age" onBlur={this.validateField.bind(this)} ref="age">
                  <option value>- select age -</option>
                  { getAgeOptions ? getAgeOptions.map(value => (<option key={value.age} value={value.age}>{value.age}</option>))
                    : <option>Invalid Age Object</option> }
                </select>
                {errorField.age ? <p style={{color: 'red'}}>{errorField.age}</p> : null}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-lg btn-block btn-success">SAVE</button>
              </div>
            </div>
            </form>
          </div>
      </div>
    );
  }

  userUpdateAccount(event) {
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

  validateField(event) {
    if(event && event.preventDefault){
      const {validateInputField} = this.props;

      const fieldName = event.currentTarget.name;
      let fieldValue = event.currentTarget.value;

      if(fieldName === 'age') {
        fieldValue = parseInt(event.currentTarget.value);
      }

      validateInputField(fieldName, fieldValue);
    }
  }
}

export default UsersUpdate;
