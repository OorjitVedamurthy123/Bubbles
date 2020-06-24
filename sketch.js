var player;
var triangle;
var bubble;
function preload(){
   triangle = loadImage("tri.png");
   bubbles = loadImage("bubble.png");
   light = loadImage("laser.png");
}
function setup() {
  createCanvas(400,400);
  player = createSprite(200,200,10,10);
  player.addImage(triangle);
  player.scale = 0.05;
  bubbleGroup = new Group();
  lazer = createSprite(200,200,10,10);
  lazer.addImage(light);
  //lazer.visible = false;
  lazer.scale = 0.05;
}

function draw() {
  background("lightblue");
  if(keyIsDown(RIGHT_ARROW)){
    player.rotation = player.rotation  + 10;
    lazer.rotation = lazer.rotation + 10; 
  }
  if(keyIsDown(LEFT_ARROW)){
    player.rotation = player.rotation - 10;
    lazer.rotation  = lazer.rotation - 10;
  }
  if(keyIsDown(UP_ARROW)){
    player.y = player.y - 5;
    lazer.y = lazer.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y + 5;
    lazer.y = lazer.y + 5;
  }
  
  if(player.y > 400){
    player.y = 0;
    lazer.y = 0;
  }
  if(player.y < 0){
    player.y = 400;
    lazer.y = 400;
  }
  
  spawnBubbles();
  //player.scale = 1.5;
  drawSprites();
}
function spawnBubbles(){
  if(World.frameCount % 20 === 0){
  bubble = createSprite(random(0,400),random(0,400),40,40);
  bubble.addImage(bubbles);
  bubble.velocityX = random(-5,5);
  bubble.velocityY = random(-5,5);
  bubble.scale = 0.1;
  bubbleGroup.add(bubble);
}
}
function keyPressed(){
  if(keyCode === 32){
    lazer.velocityY = 5;
    //lazer.visible = true;
  }
}