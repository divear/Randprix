import { useEffect, useRef, useState } from 'react';
import './App.css';
var size = Math.round(window.innerHeight/150)*100

function App() {
  const canvasRef = useRef(null)
  
  const draw = c => {
    c.fillStyle = '#000000'
    for (let i = 0; i < 20; i++) {
      c.fillRect(Math.round((Math.random()*size)/100)*100,Math.round((Math.random()*size)/100)*100, 100, 100)
    }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])

  return (
    <div>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={size}
        height={size}
      />
    </div>
  );
}

export default App;