import React, { useState } from 'react'

function PrevCounter() {

    const [count, setCount]=useState(0);
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>
                Count: {count}
            </button>
        </div>
    )
}

export default PrevCounter