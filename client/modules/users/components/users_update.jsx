import React from 'react';
import SelectAge from './select_age.jsx';

class UsersUpdate extends React.Component {
  render() {
    const {user} = this.props;
    const {error} = this.props;
    const {errorField} = this.props;
    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <h2><span className="glyphicon glyphicon-pencil"></span> User Update</h2>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form className="form-horizontal" onSubmit={this.userUpdateAccount.bind(this)}>
            <div className={this.getInputWrapperClass(errorField.username)}>
              <label for="inputUsername" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputUsername" defaultValue={user.profile.username} placeholder="Username" />
                {errorField.username ? <p style={{color: 'red'}}>{errorField.username}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.firstname)}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputFirstname" defaultValue={user.profile.firstname} placeholder="Firstname" />
                {errorField.firstname ? <p style={{color: 'red'}}>{errorField.firstname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.lastname)}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputLastname" defaultValue={user.profile.lastname} placeholder="Lastname" />
                {errorField.lastname ? <p style={{color: 'red'}}>{errorField.lastname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.gender)}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" id="selectGender" defaultValue={user.profile.gender} >
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
                <SelectAge selectId="selectAge" selectClass="form-control" selectValue={user.profile.age} />
                {errorField.age ? <p style={{color: 'red'}}>{errorField.age}</p> : null}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-lg btn-block btn-primary">SAVE</button>
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
}

export default UsersUpdate;
