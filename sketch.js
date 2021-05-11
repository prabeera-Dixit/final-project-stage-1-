var backgroundImg;
var jungle;

function preload(){

backgroundImg = loadImage("images/foresty.jpg");

  
}



function setup() {
 createCanvas(1200, 1010);
  
 jungle=createSprite(250,350,1500,1010);
  jungle.addImage(backgroundImg);
  jungle.scale=0.7;
  jungle.x=jungle.width/2;
  jungle.velocityX=-3;
 
}

function draw() {
 background(255);

 text(mouseX + ',' +mouseY, mouseX, mouseY)

 if(jungle.x < 0){
   jungle.x = jungle.width/2;
 }

  drawSprites();
 
}

