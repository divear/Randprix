import React from 'react'

function Home() {
    return (
        <div>
            <title>Randpix</title>
            <h1>Randpix</h1>
            <button onClick={()=>window.location = "/new"}>Describe a new image</button>
        </div>
    )
}

export default Home