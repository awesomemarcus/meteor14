import React from 'react';
import NavBar , {NavBarLogOut} from './nav_bar';

class Layout extends React.Component {
  render() {
    const {content,userId, Meteor, meteorSettings, mainError, mainSuccess} = this.props;
    return (
      <div>
        {mainError ? this.handleToastr('danger', mainError) : null}
        {mainSuccess ? this.handleToastr('success', mainSuccess) : null}
        <div>
          {userId ?   <NavBar Meteor={Meteor} meteorSettings={meteorSettings} userId={userId} /> :   <NavBarLogOut meteorSettings={meteorSettings} /> }

          <div className="container marginTop">
            {content()}
          </div>
        </div>
      </div>
    );
  }

  handleToastr(type, message) {
    const {Bert, clearErrors} = this.props;

    Bert.alert( message, type, 'growl-top-right');
    clearErrors();
  }
}

export default Layout;
