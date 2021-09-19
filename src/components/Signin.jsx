import { useEffect, useRef, useState } from 'react';
const blockSize = 50
var size = Math.round(window.innerHeight/150)*100

function Signin() {
    const [body, setbody] = useState("")
  const canvasRef = useRef(null)
  
  const draw = c => {
    c.fillStyle = "#" + ((1<<24)*Math.random() | 0).toString(16)
    for (let i = 0; i < 20; i++) {
      c.fillRect(Math.round((Math.random()*size)/blockSize)*blockSize,Math.round((Math.random()*size)/blockSize)*blockSize, blockSize, blockSize)
    }
    let isVisible = false
    
    var timer = setInterval(()=>{
      for (let i = 0; i < 10; i++) {
        let oneRand = [Math.round((Math.random()*size)/blockSize)*blockSize, Math.round((Math.random()*size)/blockSize)*blockSize]
        isVisible ? c.fillRect(oneRand[0],oneRand[1], blockSize, blockSize) : c.clearRect(oneRand[0],oneRand[1], blockSize, blockSize)
        isVisible = !isVisible
      }
      
    },1000)
  }
  function send(e){
    e.preventDefault()
    
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
      <h1>What do you see in this animation?</h1>
      <form onClick={e => send(e)} action="">
        <input className="whatSee" placeholder="a tree, a cloud, a house" type="text" value={body} onChange={e=>setbody(e.target.value)} />
        <button>send</button>
      </form>
    </div>
  );
}

export default Signin;