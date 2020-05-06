import React from 'react';


const Button = (props) => {
    return(
        <button
            style= {props.style}
            className = {props.type=='form'? 'btn btn-form' : 'btn btn-header'}
            disabled={props.disabled}>
            {props.title}
        </button>
    )
}


export default Button;
