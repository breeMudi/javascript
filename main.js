const canvas = document.querySelector('canvas')
const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

class Ball{
  constructor(x, y, velX, velY, size, color){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.size = size;
    this.color = color
  }
}

function random(min, max) = {
  Math.floor(Math.random() * (max - min + 1)) + 1 
}
