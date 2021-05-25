import React, { useState } from 'react'
import './App.css'
import Demo from './Demo'
import Demo3 from './Demo3'

const App = () => {
  const [data, setData] = useState(false)
  const [dats, setDats] = useState(0)
  const toggleHandler = () => {
    setData(prevData => !prevData)
    setDats(dats + 1)
  }
  return (
    <div className="ab">
      <center>
        <h1>Component Rendering.</h1>
        <Demo3 da={dats} />
        <Demo show={data} />
        <button onClick={toggleHandler}>Click Me.</button>
      </center>
    </div>
  )
}

export default App;




import React, { useState,useCallback } from 'react'
import './App.css'
import Demo from './Demo'
import Button from './Button'

const App = () => {
  const [data, setData] = useState(false)
  
  const toggleHandler =useCallback(() => {
    setData(prevData => !prevData)
    },[data]);

  return (
    console.log('app rendered'),
    <div className="ab">
      <center>
        <h1>Component Rendering.</h1>
        
        <Demo show={false} />
        <Button onClick={toggleHandler}>Click Me.</Button>
      </center>
    </div>
  )
}

export default App;