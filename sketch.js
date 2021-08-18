
var fixedRect, movingRect;
var particle1 , particle2;
var edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  //particle1 , particle 2
  particle1=createSprite(200,300,40,50);
  particle1.shapeColor="Blue";
 particle1.velocityX=3;

  particle2=createSprite(1000,300,40,50);
  particle2.shapeColor="red";
  particle2.velocityX=-3;

}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect)
  bounceOff(particle1,particle2)

  
  drawSprites();

  
}
