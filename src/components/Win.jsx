import React from 'react'
import trophy from "./imgs/trophy.gif"
import trophyBestScore from "./imgs/trophyBestScore.png"


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
            <title>You win</title>
            <h1>You win!</h1>
            <img className="imgs" src={time === bestScore ? trophyBestScore : trophy} alt="b" />
            <h2 className="yourTime">Your time: <span className="time">{localStorage.getItem("time")}s</span></h2>
            <br />
            <h1 className="yourTime">Your best time: <span className="besttime">{bestScore}s</span></h1>

            <button onClick={again} style={buttons}>Try again.</button>
            <h1>{bestScore === time ? "Personal best!!" : ""}</h1>

        </div>
    )
}

export default Win
