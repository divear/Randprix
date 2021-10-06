import React from 'react'

const bestScore = localStorage.getItem("bestScore")
const time = localStorage.getItem("time")

export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  


function Win() {    

    function again(e){
        if(e.key === "Enter" | e.key === " " | !e.key){
            window.location = "/game"
        }
    }
    window.document.addEventListener('keypress', e => again(e))
    return (
        <div>
            <title>You won</title>
            <h2>Your time: {localStorage.getItem("time")}s</h2>
            <button onClick={again} style={buttons}>Try again.</button>
            <div className="yourScores">
                <h1>Your best score: {bestScore}s</h1>
                <h1>{bestScore === time ? "Personal best!!" : ""}</h1>
            </div>
        </div>
    )
}

export default Win
