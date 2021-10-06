import React from 'react'
import { buttons } from './Win';

function Fail() {
    function again(e){
        if(e.key === "Enter" | e.key === " " | !e.key){
            window.location = "/game"
        }
    }
    window.document.addEventListener('keypress',e => again(e))
    return (
        <div>
            <title>Game over</title>
            <h1>Game over</h1>
            <button onClick={again} style={buttons}>Try again.</button>
        </div>
    )
}

export default Fail;