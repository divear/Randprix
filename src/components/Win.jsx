import React from 'react'

export const buttons = {
    backgroundColor: localStorage.getItem("bgColor")
}  

function Win() {
    
    return (
        <div>
            <title>You won</title>
            <h1>You won</h1>
            <h2>Your time: {localStorage.getItem("time")}s</h2>
            <button onClick={()=>window.location = "/game"} style={buttons}>Try again.</button>
        </div>
    )
}

export default Win
