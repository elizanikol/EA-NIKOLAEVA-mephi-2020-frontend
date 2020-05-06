import React, {Component} from "react";
import Button from "../buttons/Button";
import {NavLink} from "react-router-dom";

const validate = (state) => {
    return (state.email.length > 0 && state.password.length >= 6);
};

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {

            username: "",
            email: "",
            password: "",
            password2: "",

            errors: {
                username: '',
                email: '',
                password: '',
                password2: ''
            }
        };
    }

    handleChange = event => {
        const {name, value} = event.target;
        const {password, password2, errors} = this.state;
        const validEmailRegex = RegExp(/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i);
        const validUsername = RegExp(/[а-яё]/i);

        switch (name) {
            case 'username':
                errors.username = validUsername.test(value) ? '' : <strong>Your name must be in cyrillic!</strong>;
                break;

            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : <strong>Email is not valid!</strong>;
                break;

            case 'password':
                errors.password = (value.length < 6) ? <strong>Your password must be at least 6 characters long!</strong> : '';
                break;

            case 'password2':
                errors.password2 = (value !== password) ? <strong>Passwords do not match!</strong> : '';
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: event.target.value });
    };

    render() {
        const isDisabled = !validate(this.state);

        return (
            <form>
                <h2>Sign up</h2>

                <input type="text" class ="box" placeholder="Enter your name" name = 'username' value={this.state.username} onChange={this.handleChange}/>
                <div class="subString">{this.state.errors.username}</div>

                <br/>
                <input type="text" class ="box" placeholder="Enter a valid email" name = 'email' value={this.state.email} onChange={this.handleChange}/>
                <div class="subString">{this.state.errors.email}</div>

                <br/>
                <input type="password" class ="box" placeholder="Enter password" name = 'password' value={this.state.password} onChange={this.handleChange}/>
                <div class="subString">{this.state.errors.password}</div>

                <br/>
                <input type="password" class ="box" placeholder="Confirm password" name = 'password2' value={this.state.password2} onChange={this.handleChange}/>
                <div class="subString">{this.state.errors.password2}</div>

                <br/>
                <NavLink to="/home"><Button type = {'form'} title = {'Submit'} disabled={isDisabled} /></NavLink>
            </form>
        );
    }
}

export default SignUpForm;
