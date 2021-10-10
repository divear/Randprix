import React from 'react'

function Home() {
    return (
        <div>
            <title>Randprix</title>
            <button className="startB" onClick={()=>window.location = "/game"}>Play</button>

            <h1>Hint:</h1>
            <h3>Use {window.innerHeight > 820 ? "WASD" : "the arrow buttons on the screenb"} to move.</h3>
        </div>
    )
}

export default Home
