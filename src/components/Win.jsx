import React from 'react'

function Win() {
    return (
        <div>
            <title>You won</title>
            <h1>You won</h1>
            <h2>Your time: {localStorage.getItem("time")}s</h2>
        </div>
    )
}

export default Win
