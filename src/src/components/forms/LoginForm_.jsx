import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {email, required, renderField, minLength8} from './FormValidation'
import {NavLink} from "react-router-dom";
import '../pages/custom.scss';

const LoginForm_ = (props) => {
    const { invalid, handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="form-container d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={handleSubmit}>
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
                <div className="d-flex flex-row justify-content-around">
                    <NavLink to="/home"><button type="submit" class="btn btn-primary" disabled={invalid || pristine || submitting}>Submit</button></NavLink>
                    <button type="button" class="btn btn-outline-success" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'fieldArrays'
})(LoginForm_)
