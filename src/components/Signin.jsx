import { useEffect, useRef, useState } from 'react';
var size = Math.round(window.innerHeight/150)*100

function Signin() {
    const [body, setbody] = useState("")
  const canvasRef = useRef(null)
  
  const draw = c => {
    c.fillStyle = "#" + ((1<<24)*Math.random() | 0).toString(16)
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
      <title>Sigin to Randprix</title>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={size}
        height={size}
      />
      <h1>What do you see in this image?</h1>
      <input className="whatSee" placeholder="a tree, a cloud, a house" type="text" value={body} onChange={e=>setbody(e.target.value)} />
    </div>
  );
}

export default Signin;