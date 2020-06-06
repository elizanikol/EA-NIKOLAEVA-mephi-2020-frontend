import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {email, required, renderField, minLength8, passwordsMustMatch } from './FormValidation'
import {NavLink} from "react-router-dom"


const SignUpForm = (props) => {
    const { invalid, handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="form-container d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={handleSubmit} class="d-flex flex-column">
                <div className="form-group">
                <Field name="username" type="text"
                       component={renderField} label="Username"
                       validate={required}
                />
                </div>
                <div className="form-group">
                <Field name="email" type="email"
                       component={renderField} label="Email"
                       validate={[ required, email]}
                />
                </div>
                <div className="form-group">
                <Field name="password" type="password"
                       component={renderField} label="Password"
                       validate={[ required, minLength8 ]}
                />
                </div>
                <div className="form-group">
                <Field name="passwordConfirmation" type="password"
                       component={renderField} label="Confirm password"
                       validate={[required, passwordsMustMatch]}
                />
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <NavLink to="/home"><button type="submit" class="btn btn-primary" disabled={invalid || pristine || submitting}>Submit</button></NavLink>
                    <button type="button" class="btn btn-outline-success" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'SignUpForm',
})(SignUpForm);
