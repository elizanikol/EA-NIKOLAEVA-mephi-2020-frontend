import React from 'react';
import  SignUpForm from '../forms/SignUpForm';
import './Page.css'

const SignUp = () => {
    return (
        <body id="SignUpForm">
            <div className="parent-container">

                <div className="left-container images"></div>

                <div className="right-container">

                    <h2 className="headline"></h2>
                    <SignUpForm />
                </div>
            </div>
        </body>
    );
}

export default SignUp;
