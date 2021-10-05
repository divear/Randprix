import React, { useEffect, useState } from 'react'


export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  

const date = new Date()

function Win() {    

    function again(e){
        console.log(e.key );
        if(e.key === "Enter" | e.key === " "){
            window.location = "/game"
        }
    }
    window.document.addEventListener('keypress', e => again(e))
    return (
        <div>
            <title>You won</title>
            <h2>Your time: {localStorage.getItem("time").substring(0,4)}s</h2>
            <button onClick={again} style={buttons}>Try again.</button>
            <div className="yourScores">
                <h1>Your best score: {localStorage.getItem("bestScore")}</h1>
                
            </div>
        </div>
    )
}

export default Win
