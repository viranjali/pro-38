var survivalTime;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var food; 
var obstacle;
var backgr,backImage
var score=0;

function preload(){
  backImage = loadImage("jungle.jpg")
   monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(800,400);
  backgr = createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale = 1.5;
  backgr.velocityX = -4;
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible= false;
   
  FoodGroup = new Group();
  ObstacleGroup = new Group();
}


function draw() {
background("white");
 camera.position.x=monkey.x;
 camera.position.y=monkey.y;
  if(ground.x<200){
    ground.x= ground.width/2;
  }
    if(backgr.x<100){
    backgr.x= backgr.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  if(monkey.isTouching(FoodGroup)){
   FoodGroup.destroyEach();
    score=score+2;
  }
   switch(score){
       
       case 10: monkey.scale=0.12;
       break;
       
       case 20: monkey.scale=0.14;
       break;
       
       case 30: monkey.scale=0.16;
       break;
       
       case 40: monkey.scale=0.18;
       break;
       default: break;
   }
  

  if(monkey.isTouching(ObstacleGroup)){
  monkey.scale=0.1;  
  }
  
  food();
  obstacles();
  monkey.collide(ground)
  drawSprites();
  
    stroke("white");
 textSize(20);
  fill("black");
  text("score: "+ score, 500,50);
}

  function food() {
    if( frameCount%100===0){
      
    
   banana=createSprite(600,30,20,20);
   banana.addImage(bananaImage);
   banana.scale=0.05;
   banana.lifetime = 300;
   banana.velocityX = -6;
   banana.y = random(120,200);
   FoodGroup.add(banana);
 }
  }
 
  function obstacles() {
    if(frameCount%250===0){
   obstacle =createSprite(600,327,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.lifetime=300;
   obstacle.velocityX = -5;
   ObstacleGroup.add(obstacle);
 }
  }
