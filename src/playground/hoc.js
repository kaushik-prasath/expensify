// Higher Order Component (HOC) - A component(HOC) that render another component.
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info here</h1>
    {props.isAuthenticated && <p>Here are some info: {props.info}</p>  }
  </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>The Information below are confidential so please do not share with anyone.</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> :<p>Please login to view the credentials</p>}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));