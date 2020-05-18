var movedRect;
var fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  movedRect=createSprite(400,200,80,30);
  movedRect.shapeColor="green";
}

function draw() {
  background(0,255,255); 
  movedRect.x= World.mouseX;
  movedRect.y= World.mouseY;
  
  if(movedRect.x-fixedRect.x<fixedRect.width/2+movedRect.width/2 
    &&fixedRect.x-movedRect.x<fixedRect.width/2+movedRect.width/2
     && movedRect.y-fixedRect.y<fixedRect.height/2+movedRect.height/2 &&
     fixedRect.y-movedRect.y<fixedRect.height/2+movedRect.height/2){
        movedRect.shapeColor="red"; 
        fixedRect.shapeColor="red";
       } else { 
         
         movedRect.shapeColor="green"; 
         fixedRect.shapeColor="green";
         }

  
  drawSprites();
}