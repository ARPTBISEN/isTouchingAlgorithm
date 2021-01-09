var movingrect,fixedrect;

function setup() {
  createCanvas(800,800);
  fixedrect=createSprite(400, 200, 100, 100);
  movingrect=createSprite(200, 400, 50, 50);
}

function draw() {
  background("skyblue");  
  movingrect.x=mouseX
  movingrect.y=mouseY

if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
){
  movingrect.shapeColor="pink"
  fixedrect.shapeColor="pink"
}else{
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}

  drawSprites();
}