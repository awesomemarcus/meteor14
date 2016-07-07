import React from 'react';

class UsersUpdate extends React.Component {
  render() {
    const  {user, getAgeOptions, formErrorObject, mainError} = this.props;
    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">

          <h2><span className="glyphicon glyphicon-edit"></span> User Update</h2>
          {mainError ? <p  style={{color: 'red'}}>{mainError}</p> : null}
          <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.profilename")}>
              <label for="inputProfilename" className="col-sm-2 control-label">Profilename</label>
              <div className="col-sm-10">
                <input type="text" name="profile.profilename" ref="profilename" className="form-control" id="inputProfilename" defaultValue={user.profile.profilename} onBlur={this.handleBlur.bind(this)} placeholder="Profilename" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.profilename"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.firstname")}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" name="profile.firstname" ref="firstname" className="form-control" id="inputFirstname" defaultValue={user.profile.firstname} onBlur={this.handleBlur.bind(this)} placeholder="Firstname" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.firstname"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.lastname")}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" name="profile.lastname" ref="lastname" className="form-control" id="inputLastname" defaultValue={user.profile.lastname}
                onBlur={this.handleBlur.bind(this)} placeholder="Lastname" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.lastname"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.gender")}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" name="profile.gender" id="selectGender" defaultValue={user.profile.gender} onBlur={this.handleBlur.bind(this)} ref="gender">
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
                <select className="form-control" id="selectAge" defaultValue={user.profile.age} name="profile.age" onBlur={this.handleBlur.bind(this)} ref="age">
                  <option value>- select age -</option>
                  { getAgeOptions ? getAgeOptions.map(value => (<option key={value.age} value={value.age}>{value.age}</option>))
                    : <option>Invalid Age Object</option> }
                </select>
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.age"]}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(formErrorObject, "profile.description")}>
              <label for="selectGender" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <textarea className="form-control" name="profile.description" id="description" defaultValue={user.profile.description} onBlur={this.handleBlur.bind(this)} ref="description" />
                {formErrorObject ? <p style={{color: 'red'}}>{formErrorObject["profile.description"]}</p> : null}
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

  handleSubmit(e){
    if(e && e.preventDefault){
      e.preventDefault();

      const {usersUpdate} = this.props;

      let formData = {};
      const formDataSerialize = $(e.currentTarget).serializeArray();

      formDataSerialize.map(form => {
        formData[form.name] = form.value;
        if(form.name === "profile.age"){
          formData[form.name] = parseInt(form.value);
        }

        //Exemptions for description
        if(form.name === 'profile.description') {
          if(form.value === ""){
            formData[form.name] = null;
          }
        }
      });

      usersUpdate(formData);
    }
  }

  handleBlur(e){
    if(e && e.preventDefault){
      const {usersUpdate} = this.props;

      const fieldName = e.currentTarget.name;
      let fieldValue = e.currentTarget.value;

      if(fieldName === 'profile.age') {
        fieldValue = parseInt(e.currentTarget.value);
      }

      //Exemptions for description
      if(fieldName === 'profile.description') {
        if(fieldValue === ""){
          fieldValue = null;
        }
      }

      usersUpdate(null, fieldName, fieldValue);
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

export default UsersUpdate;
