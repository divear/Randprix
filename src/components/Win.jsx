import React from 'react'

export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  

function Win() {
    function again(){
        window.location = "/game"
    }
    window.document.addEventListener('keypress', again)
    return (
        <div>
            <title>You won</title>
            <h1>You won</h1>
            <h2>Your time: {localStorage.getItem("time")}s</h2>
            <button onClick={again} style={buttons}>Try again.</button>
        </div>
    )
}

export default Win
