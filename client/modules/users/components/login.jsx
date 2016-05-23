import React from 'react';

class Login extends React.Component{
  render() {
    return(
      <div>
          <form onSubmit={this.login.bind(this)}>
            Email:<input ref="email" type="text" />
          Password:<input ref="password" type="password" />
          <input type="submit" value="submit" />
          </form>
      </div>
    );
  }

  login(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }


    const {email, password} = this.refs;
    const formData = {
      email : email.value,
      password : password.value,
    }

  }

}

export default Login;
