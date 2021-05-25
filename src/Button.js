import React from 'react'

const Button = (props) => {
    console.log('button rendered')
    return (
        <div>
            <button onClick = {props.onClick}>{props.children}</button>
        </div>
    )
}

export default Button;
