import React from 'react'
import './App.css'
import Demo2 from './Demo2'

const Demo = (props) => {
    console.log('demo rendered')
    return (
        <Demo2>
            {props.show ?'visible':''}
        </Demo2>
    )
}

export default React.memo(Demo);
