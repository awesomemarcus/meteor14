import React from 'react';

class UsersLogin extends React.Component{
  render() {

    const {userLogin} = this.props;


    const {error} = this.props;
    return(
      <div className="container">


      <form className="form-signin">
        <h2 className="form-signin-heading">User login</h2>

        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autofocus />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
    );
  }

  userLogin(event){
    if(event && event.preventDefault){
      event.preventDefault();
    }

        const {userLogin} = this.props;
  }

}

export default UsersLogin;
