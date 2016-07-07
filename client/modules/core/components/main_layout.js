import React from 'react';
import NavBar , {NavBarLogOut} from './nav_bar';

class Layout extends React.Component {
  render() {
    const {content,userId, Meteor, meteorSettings} = this.props;
    return (
      <div>
        <div>
          {userId ?   <NavBar Meteor={Meteor} meteorSettings={meteorSettings} userId={userId} /> :   <NavBarLogOut meteorSettings={meteorSettings} /> }

          <div className="container marginTop">
            {content()}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
