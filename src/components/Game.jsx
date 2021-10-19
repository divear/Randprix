import { useEffect, useRef } from 'react';
import coin from "./imgs/coin.png"
import player from "./imgs/player.png"
import skull from "./imgs/skull.png"
const blockSize = 50
var size = Math.round(window.innerHeight/150)*(blockSize*2.7)
const bgColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
const canvasColor = '#' + ("000000" + (0xFFFFFF ^ parseInt(bgColor.substring(1),16)).toString(16)).slice(-3);
const bestScore = localStorage.getItem("bestScore") || Infinity
var playerCords = {
  x: Math.round((Math.random()*size)/blockSize)*blockSize,
  y: Math.round((Math.random()*size)/blockSize)*blockSize
}
var allBlockCords =  []
var allSkullCords = []
const totalCoins = 3
var coins = 0
var time = 0

const image = new Image()
image.src = coin
const skullImg = new Image()
skullImg.src = skull
const playerImg = new Image()
playerImg.src = player

//generates a bit darker color
function ColorLuminance() {
  let bgc = canvasColor 
  let lum = -0.03
	bgc = String(bgc).replace(/[^0-9a-f]/gi, '');
	if (bgc.length < 6) {
		bgc = bgc[0]+bgc[0]+bgc[1]+bgc[1]+bgc[2]+bgc[2];
	}
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(bgc.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}

function Game() {
  localStorage.setItem("bgColor",bgColor)
  const canvasRef = useRef(null)

  useEffect(() => {
    setInterval(() => {
      time+=0.01
    }, 10)
  }, [])
  
  const draw = (c) => {
    image.onload = () => {
      skullImg.onload = () => {
        for (let i = 0; i <= totalCoins; i++) {
          const blockCords = [Math.round((Math.random()*size)/blockSize)*blockSize, Math.round((Math.random()*size)/blockSize)*blockSize];
          allBlockCords.push(blockCords);
          c.drawImage(image, blockCords[0], blockCords[1], blockSize, blockSize);
          c.drawImage(skullImg, allSkullCords[0], allSkullCords[1], blockSize, blockSize);
        }
      }
    }
    playerImg.onload = () => {
      c.drawImage(playerImg, playerCords.x,playerCords.y, blockSize, blockSize);
    };
  }
  function move(e){
    const canvas = canvasRef.current
    const c = canvas.getContext('2d');
    c.clearRect(playerCords.x,playerCords.y, blockSize, blockSize);

    c.fillStyle = ColorLuminance()
    c.fillRect(playerCords.x, playerCords.y, blockSize, blockSize)


    //checks if player has hit the wall before moving 
    if(playerCords.x >= size || playerCords.y >= size || playerCords.x <= -50 || playerCords.y <=-50){
      window.location = "fail"
      return;
    }

    switch(e.key || e){
      case "w":
      case "W":
        playerCords.y -= blockSize
        break;
      case "a":
      case "A":
        playerCords.x -= blockSize
        break;
      case "s":
      case "S":
        playerCords.y += blockSize
        break;
      case "d":
      case "D":
        playerCords.x += blockSize
        break;
      default:
        break
      }
     c.drawImage(playerImg, playerCords.x,playerCords.y, blockSize, blockSize);

    allBlockCords.forEach((e,index) => {
      if(e[0] === playerCords.x && e[1] === playerCords.y){
        coins++
        if(coins === totalCoins){
          if(time < bestScore){
            localStorage.setItem("bestScore", time.toString().substring(0,4))
          }
          localStorage.setItem("time", time.toString().substring(0,4))
          window.location = "win"
        }
        allBlockCords.splice(index, 1)
      }
    }) 
    allSkullCords.forEach((e) => {
      if(e[0] === playerCords.x && e[1] === playerCords.y){
        window.location = "fail"
      }
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    window.document.addEventListener('keypress',e => move(e, context))
    draw(context)
  }, [])

  return (
    <div>
      <title>Play Randprix</title>

      <h1 className={localStorage.getItem("bestScore") ? "no" : "hint"}>Use WASD to move.</h1>
      <canvas
        style={{backgroundColor: canvasColor}}
        id="canvas"
        ref={canvasRef}
        width={size}
        height={size}
      />
      <div className="phoneControls">
        <button onClick={(e,c) => move(e = "w",c)} className="u">&uarr;</button>
        <br className={window.innerWidth > 600 && window.innerWidth < 820 ? "no" : ""} />
        <button onClick={(e,c) => move(e = "a",c)} className="l">&larr;</button>
        <button onClick={(e,c) => move(e = "s",c)} className="d">&darr;</button>
        <button onClick={(e,c) => move(e = "d",c)} className="r">&rarr;</button>
      </div>
    </div>

  );
}

export default Game;