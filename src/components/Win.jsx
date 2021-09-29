// import {firebaseConfig, firestore} from "../config/config"
import {addDoc,doc, getDoc, collection, getFirestore} from "firebase/firestore"


import React, { useEffect, useState } from 'react'
var date = new Date
const db = getFirestore();




export const buttons = {
    backgroundColor: localStorage.getItem("bgColor"),
    color: localStorage.getItem("playerColor")
}  

    function Win() {
        const [data, setData] = useState(null)


        async function add(){
            const docRef = await addDoc(collection(db, "scores"), {
            id: 1,
            score: 55,
            time: date,
            username: "lukas"
        });
    }
    async function get(){
        const docRef = await addDoc(collection(db, "scores"))
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
