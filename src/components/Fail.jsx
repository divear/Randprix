import React from 'react'
import { buttons } from './Win';
import fail from "./imgs/fail.png"
import retryArrows from "./imgs/retryArrows.png"

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
            <h1 className="goText">Game over</h1>
            <br />
            <button className="tryAgainButton" onClick={again} style={buttons}>Try again <img className="retryArrows" src={retryArrows} alt="" /></button>
        </div>
    )
}

export default Fail;