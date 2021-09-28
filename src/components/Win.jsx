import React, { useState } from 'react'
var date = new Date
import firebase from "../config"

export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  

function Win() {
    const [database, setDatabase] = useState(null)
    const [data, setData] = useState(null)

    const ref = firebase.firestore().collection("scores")
    console.log(ref);


    function again(){
        window.location = "/game"
    }
    window.document.addEventListener('keypress', again)
    return (
        <div>
            <h1 className="logo">Randprix</h1>
            <title>You won</title>
            <h1>You won</h1>
            <h2>Your time: {localStorage.getItem("time")}s</h2>
            <button onClick={again} style={buttons}>Try again.</button>
            <div className="yourScores">
                <h1>Your best scores:</h1>
                <table>
                    <thead>
                        <tr> 
                            <th>username</th>
                            <th>score</th>
                            <th>id</th>
                            <th>time</th>
                        </tr>
                
                    </thead>
                    <tbody>
                        <tr>
                            <td>{date.toUTCString()}</td>
                            <td>28</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Win
