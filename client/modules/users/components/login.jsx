import React from 'react';

class Login extends React.Component{
  render() {
    const {login} = this.props;
    const formData = {
      email :"jun@mail.com",
      password : "password",
    };
    login(formData);
    return(
        <div>
            Login
        </div>
    );
  }

  login(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }

  }

}

export default Login;
