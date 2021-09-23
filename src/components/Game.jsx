import { useEffect, useRef } from 'react';
const blockSize = 50
var size = Math.round(window.innerHeight/150)*(blockSize*2.7)
const bgColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
var playerCords = {
  x: Math.round((Math.random()*size)/blockSize)*blockSize,
  y: Math.round((Math.random()*size)/blockSize)*blockSize
}
var allBlockCords =  []
const totalCoins = 20
var coins = 0
var time = 0

function Signin() {
  const canvasRef = useRef(null)

  useEffect(() => {
    setInterval(() => {
      time++
      console.log(time);
    }, 1000)
  }, [])
  
  const draw = c => {
    c.fillStyle = bgColor
    for (let i = 0; i <= totalCoins; i++) {
      const blockCords = [Math.round((Math.random()*size)/blockSize)*blockSize, Math.round((Math.random()*size)/blockSize)*blockSize];
      allBlockCords.push(blockCords);
      c.fillRect(blockCords[0], blockCords[1], blockSize, blockSize)
    }
    c.fillStyle = '#' + ("000000" + (0xFFFFFF ^ parseInt(bgColor.substring(1),16)).toString(16)).slice(-6);
    c.fillRect(playerCords.x,playerCords.y, blockSize, blockSize)
  }
  function move(e,c){
    switch(e.key){
      case "w":
      case "W":
        c.clearRect(playerCords.x, playerCords.y, blockSize, blockSize)
        playerCords.y -= blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      case "a":
      case "A":
        c.clearRect(playerCords.x, playerCords.y, blockSize, blockSize)
        playerCords.x = playerCords.x - blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      case "s":
      case "S":
        c.clearRect(playerCords.x, playerCords.y, blockSize, blockSize)
        playerCords.y = playerCords.y + blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
      case "d":
      case "D":
        c.clearRect(playerCords.x, playerCords.y, blockSize, blockSize)
        playerCords.x = playerCords.x + blockSize
        c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)
        break;
    }
    if(playerCords.x >= size || playerCords.y >= size || playerCords.x <= -50 || playerCords.y <=-50){
      window.location = "fail"
      return;
    }
    allBlockCords.forEach((e,index) => {
      if(e[0] === playerCords.x && e[1] === playerCords.y){
        coins++
        if(coins === totalCoins+1){
          localStorage.setItem("time", time)
          window.location = "win"
        }
        allBlockCords.splice(index, 1)
      }
    })
    
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