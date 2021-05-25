import React from 'react'


function Demo2(props) {
    console.log('demo 2 rendered')
    return (
        <div className = "pp">
            {props.children}
        </div>
    )
}

export default Demo2;
