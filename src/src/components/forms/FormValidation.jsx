import React from "react";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
    await sleep(500);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});

export const required = value => value ? undefined : ' Required'

const minLength = min => value =>
    value && value.length < min ? ` Must be at least ${min} characters` : undefined
export const minLength8 = minLength(8)

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        ' Invalid email address' : undefined

export const passwordsMustMatch = (value, allValues) =>
    value !== allValues.password ?
        ' Passwords do not match' :
        undefined

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

