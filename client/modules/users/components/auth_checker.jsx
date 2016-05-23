import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';


class AuthChecker extends React.Component{
    render() {
      const {MainLayout, content, userId} = this.props;
        if(!userId){
            FlowRouter.go("/");
        }
        return(
            <div>
              <MainLayout  content={content}/>
            </div>
        );

    }
}

export default AuthChecker;
