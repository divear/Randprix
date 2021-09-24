import React from 'react'
import { buttons } from './Win';

function Fail() {
    return (
        <div>
            <title>Game over</title>
            <h1>Game over</h1>
            <button onClick={()=>window.location = "/game"} style={buttons}>Try again.</button>
        </div>
    )
}

export default Fail;