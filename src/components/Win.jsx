import React, { useEffect, useState } from 'react'


export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  

const date = new Date()

    function Win() {    


    function again(){
        window.location = "/game"
    }
    window.document.addEventListener('keypress', again)
    return (
        <div>
            <title>You won</title>
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
