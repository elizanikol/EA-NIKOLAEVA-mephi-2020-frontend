import React, {Component} from 'react';
import  SignUpForm from '../forms/SignUpForm';

class SignUp extends Component {

    submit = values => {
        window.alert (JSON.stringify (values));
    };

    render () {
        return (
            <div className="container d-flex justify-content-center">
                <SignUpForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export default SignUp;
