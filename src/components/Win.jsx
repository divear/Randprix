import React, { useEffect, useState } from 'react'
const login = localStorage.getItem("login")


//extremely bad way of doing this but file export doesnt work and iam not spending another day figuring out why
const setDoc = localStorage.getItem("0")
const doc = localStorage.getItem("1")
const getDoc = localStorage.getItem("2")
const collection = localStorage.getItem("3")
const {getFirestore} = localStorage.getItem("4")

const theConfigFile = require("../config/config")

const db = getFirestore();


var date = new Date

console.log(login);

export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  

    function Win() {
        const [data, setData] = useState(null)


        async function add(){
            const docRef = await setDoc(collection(db, "scores"), {
            id: 1,
            score: 55,
            time: date,
            username: "lukas"
        });
    }
    async function get(){
        const docRef = await getDoc(collection(db, "scores"))
    }

    useEffect(() => {
        add()
        get()
    }, [])


    


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
