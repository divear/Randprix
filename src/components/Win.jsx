import React from 'react'
var date = new Date

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
            <div className="yourScores">
                <h1>Your best scores:</h1>
                <table>
                    <thead>
                        <th>time</th>
                        <th>score</th>
                    </thead>
                    <tbody>
                        <td>{date.toUTCString()}</td>
                        <td>28</td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Win
