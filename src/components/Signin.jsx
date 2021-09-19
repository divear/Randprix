import { useEffect, useRef } from 'react';
const blockSize = 50
var size = Math.round(window.innerHeight/150)*(blockSize*2.7)
const bgColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
var playerCords = {
  x: Math.round((Math.random()*size)/blockSize)*blockSize,
  y: Math.round((Math.random()*size)/blockSize)*blockSize
}

function Signin() {
  const canvasRef = useRef(null)
  
  const draw = c => {
    c.fillStyle = bgColor
    for (let i = 0; i < 20; i++) {
      c.fillRect(Math.round((Math.random()*size)/blockSize)*blockSize,Math.round((Math.random()*size)/blockSize)*blockSize, blockSize, blockSize)
    }
    c.fillStyle = '#' + ("000000" + (0xFFFFFF ^ parseInt(bgColor.substring(1),16)).toString(16)).slice(-6);
    c.fillRect(playerCords.x,playerCords.y, blockSize, blockSize)
  }
  function move(e,c){
    // c.clearRect(playerCords.x, playerCords.y, blockSize, blockSize)

    switch(e.key){
      case "w":
        playerCords.y -= blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      case "a":
        playerCords.x = playerCords.x - blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      case "s":
        playerCords.y = playerCords.y + blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      case "d":
        playerCords.x = playerCords.x + blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      default:
        console.log("none");
    }
    if(playerCords.x >= size || playerCords.y >= size){
      window.location = "fail"
      return;
    }
    console.log(playerCords);
    console.log(size);
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    window.document.addEventListener('keypress',e => move(e, context))
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
    </div>
  );
}

export default Signin;