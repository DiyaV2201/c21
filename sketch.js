var fixedRect, movingRect;
var o1 ,o2 , o3,o4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(100,100,50,50)
  o1.shapeColour="blue"
  o1.velocityY=2
  o2=createSprite(200,100,50,50)
  o2.shapeColour="blue"
  o3=createSprite(300,100,50,50)
  o1.shapeColour="blue"
  o4=createSprite(400,100,50,50)
  o4.shapeColour="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,o3)){
    movingRect.shapeColor = "red";
   o3.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    o3.shapeColor = "green";
  }
  bounceOff(movingRect,o1)
  drawSprites();
}

