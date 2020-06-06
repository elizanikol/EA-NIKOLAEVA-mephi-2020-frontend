import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import { renderField } from './FormValidation'

const renderQuestions = ({ fields }) => (
    <ul className="d-flex flex-column">
        <li>
            <button type="button" class = "btn btn-outline-info" onClick={() => fields.push({})}>Add Question</button>
        </li>
        {fields.map((question, index) =>
            <li key={index}>
                <button
                    type="button" class = "btn btn-outline-info"
                    title="Remove Question"
                    onClick={() => fields.remove(index)}/>
                <h5>Question {index + 1}</h5>
                <Field
                    name={`${question}.questionName`}
                    type="text"
                    component={renderField}
                    placeholder="Question Name"/>
                <FieldArray name={`${question}.options`} component={renderOptions}/>
            </li>
        )}
    </ul>
)

const renderOptions = ({ fields }) => (
    <ul className="d-flex flex-column">
    <br/>
        <li>
            <button type="button" class = "btn btn-outline-info" onClick={() => fields.push()}>Add Option</button>
        </li>
        {fields.map((option, index) =>
            <li key={index}>
                <button
                    type="button" class = "btn btn-outline-info"
                    title="Remove Option"
                    onClick={() => fields.remove(index)}/>
                <Field
                    name={option}
                    type="text"
                    component={renderField}
                    placeholder={`Option #${index + 1}`}/>
            </li>
        )}
        {fields.error && <li className="error">{fields.error}</li>}
    </ul>
)

const PollForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit} class="d-flex flex-column">
            <div className="form-group d-flex flex-column">
            <br/>
                <h5>Enter your Poll name:</h5>
            <Field name="Poll" type="text" component={renderField} placeholder="Poll Name"/>
            </div>
            <div className="form-group d-flex flex-column">
            <FieldArray name="questions" component={renderQuestions}/>
            </div>
            <div className="d-flex justify-content-around">
                <button type="submit" class="btn btn-primary" disabled={submitting}>Submit</button>
                <button type="button" class="btn btn-outline-success" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'LoginForm',
})(PollForm);
