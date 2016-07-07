import React from 'react';

class UsersLogin extends React.Component{
  render() {
    const {mainError, formErrorObject} = this.props;
    return(
      <div className="container">
        <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
          <h2 className="form-signin-heading text-white">Login User</h2>
          {mainError ? <p  className="text-danger">{mainError}</p> : null}
          <div className={this.getInputWrapperClass(formErrorObject, "emails.$.address")}>
            <input ref="email" type="email" id="inputEmail" name="emails.$.address" onBlur={this.handleBlur.bind(this)} className="form-control edge-square" placeholder="Email address"/>
            <span className="help-block">{formErrorObject ? <p>{formErrorObject["emails.$.address"]}</p> : null}</span>
          </div>

          <div className={this.getInputWrapperClass(formErrorObject, "password")}>
            <input ref="password" type="password" id="inputPassword" name="password" onBlur={this.handleBlur.bind(this)} className="form-control edge-square" placeholder="Password" />
            <span className="help-block">{formErrorObject ? <p>{formErrorObject["password"]}</p> : null}</span>
          </div>

          <button className="btn btn-lg btn-danger btn-block edge-square" type="submit">LOGIN</button>
          <a href="/users/signup" className="btn btn-lg btn-success btn-block edge-square">REGISTER ACCOUNT</a>
        </form>
    </div>
    );
  }

  handleSubmit(e){
    if(e && e.preventDefault){
      e.preventDefault();

      const {usersLogin} = this.props;

      let formData = {};
      const formDataSerialize = $(e.currentTarget).serializeArray();

      formDataSerialize.map(form => {
        formData[form.name] = form.value;
      });

      usersLogin(formData);
    }
  }

  handleBlur(e){
    if(e && e.preventDefault){
      const {usersLogin} = this.props;

      const fieldName = e.currentTarget.name;
      let fieldValue = e.currentTarget.value;

      usersLogin(null, fieldName, fieldValue);
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

export default UsersLogin;
