import React, { useState } from 'react'

const ToggleDiv = () => {

    const [visible,setVisible]=useState(true)
  return (
    <div>
        <button onClick={()=>setVisible(!visible)}>Toggle</button>
        {visible && <div>now do u see me!</div> }
    </div>
  )
}

export default ToggleDiv