
var monkey , monkey_running,road;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var surivialTime;
    surivialTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400)
  
  monkey = createSprite(40,330,10,10);
  monkey.addAnimation("runing", monkey_running);
  monkey.scale = 0.1;
  
  road = createSprite(300,365,1000,10);

  
}


function draw() {
  
  background("white")
  
  road.velocityX = -3;
  road.x = road.width/2;  
  
  if(keyDown("space"))
    monkey.velocityY = -8;
  
  monkey.velocityY = monkey.velocityY + 0.3;
  
  if(monkey.collide(banana))
    survivalTime = survivalTime+1;
  
  if(monkey.collide(obstacle))
    surivialTime = surivialTime+1;
  
  monkey.collide(road);
  
  spawnObstacle();
  
  spawnBanana ();
  
  text("surivialTime"+ surivialTime,500,50)
  
  drawSprites()
  
}

function spawnObstacle(){
  
  if(frameCount % 300 === 0){
  
  obstacle = createSprite(610,330,10,10)
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.scale = 0.2;
  obstacle.lifetime = 250;    
  obstacle.depth = monkey.depth;
  monkey.depth = obstacle.depth + 1; 
    
  }

 }

function spawnBanana (){
  
  if(frameCount % 300 === 0){
  
  banana = createSprite(610,random(120,200))
  banana.addImage(bananaImage);
  banana.velocityX = -3;  
  banana.scale = 0.1;
  banana.lifetime = 250;  
  banana.depth = monkey.depth;
  monkey.depth = banana.depth + 1;
     }

}





