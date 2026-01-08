import React, { useState } from 'react'

const InputDemo = () => {
    const [text,setText]=useState("")
  return (
    <div>
        <input onChange={e=>setText(e.target.value)} />
        <p>{text}</p>
    </div>
  )
}

export default InputDemo