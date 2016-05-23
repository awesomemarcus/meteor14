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

    return(
      <div>
      <form className="form-horizontal">
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
        </form>
      </div>
    );
  }

  signup(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }

  }
}


export default Signup;
