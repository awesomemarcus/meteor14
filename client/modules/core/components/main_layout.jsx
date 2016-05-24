import React from 'react';
import Helmet from 'react-helmet';
import NavBar from './nav_bar.jsx';


class Layout extends React.Component {
  render() {
    const {content,userId} = this.props;
    console.log(userId);

    return (
      <div>
      <Helmet
        title="Mantra App"
        link={
          [ {
            href: '/bootstrap-3.3.6/css/bootstrap.min.css',
            rel: 'stylesheet',
            type: 'text/css'} ]
        }
        meta={
          [ {name: 'viewport', content: 'width=device-width, initial-scale=1.0'} ]
        }
        script={[
          {"src": "/bootstrap-3.3.6/js/bootstrap.min.js", "type": "text/javascript"},
        ]}
      />
        <div>
          <NavBar />
          <div className="container marginTop">
            {content()}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
