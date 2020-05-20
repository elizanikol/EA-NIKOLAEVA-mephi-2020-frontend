/*import React from 'react'
import { connect } from 'react-redux'
import { addOption } from '../actions/addOption'

const AddOption = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addOption(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">Add Option</button>
            </form>
        </div>
    )
}

export default connect()(AddOption)*/
