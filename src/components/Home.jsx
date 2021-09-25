import React from 'react'

function Home() {
    return (
        <div>
            <title>Randpix</title>
            <h1>Randpix</h1>
            <button className="startB" onClick={()=>window.location = "/game"}>Play</button>
        </div>
    )
}

export default Home
