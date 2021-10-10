import React from 'react'
import shrug from "./shrugging_emoji.png"

function NotFound() {
    return (
        <div>
            <img className="shrug" src={shrug} alt="" />
            <h1>Path "{window.location.pathname}" doesn't exist. </h1>
            <button className="startB" onClick={()=>window.location = "/game"}>Play</button>

        </div>
    )
}

export default NotFound;
