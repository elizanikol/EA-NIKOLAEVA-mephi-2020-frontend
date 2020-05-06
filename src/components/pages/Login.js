import React from 'react';
import  LoginForm from '../forms/LoginForm';

const Login = () => {
    return (
        <body id="Login">
            <div className="parent-container">

                <div className="left-container images"></div>
                <div className="right-container">

                    <h2 className="headline"></h2>
                    <LoginForm />
                </div>
            </div>
        </body>
    );
}

export default Login;
