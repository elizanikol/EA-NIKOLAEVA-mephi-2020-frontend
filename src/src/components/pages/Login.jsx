import React, {Component} from 'react'
import LoginForm_ from "../forms/LoginForm_";

class Login extends Component {

    submit = values => {
        window.alert (JSON.stringify (values));
    };

    render () {
        return (
            <div className="container d-flex justify-content-center">
                <LoginForm_ onSubmit={this.submit}/>
            </div>
        );
    }
}

export default Login;
