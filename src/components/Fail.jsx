import React from 'react'
import { buttons } from './Win';
import retryArrows from "./imgs/retryArrows.png"
import skull from "./imgs/skull.png"

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
            <h1 className="goText">Game over <img className="skull" src={skull} alt="!" /></h1>
            <br />
            <button className="tryAgainButton" onClick={again} style={buttons}>Try again <img className="retryArrows" src={retryArrows} alt="" /></button>
        </div>
    )
}

export default Fail;