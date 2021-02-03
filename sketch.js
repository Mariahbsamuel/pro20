var car,wall
var speed,weight


function setup(){
  createCanvas(1600,1000);
speed = random (55,90)
weight = random (400,1500)

car = createSprite(50,200,20,20)
car.shapeColor = ("orange")
wall = createSprite(1500,200,30,100)
wall.shapeColor = ("purple")


}

function draw(){
  background("green")

  car.velocityX = 5

  if(car.x - wall.x < wall.width/2 + car.width/2){
    car.shapeColor = "cyan"
    wall.shapeColor = "purple"
  }
  else{
    car.shapeColor = "orange"
    wall.shapeColor = "purple"
  }

  drawSprites();
}