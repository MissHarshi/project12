var boy ,boy_running, boy_collided
var path,invisiblePath, pathImage



function preload(){
  //pre-load images
boy_running=loadAnimation("runner1.png","runner2.png")
boy_collided=loadImage("boy_collided.png")

pathImage=loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
boy = createSprite(50,150,30,40)
boy.addAnimation("running,boy_running")
boy.scale=0.5

// Moving background
 path=createSprite
path.addImage(path.Img)
path.velocity=4
path.scale=1.2

 invisiblePath.visible=false
} 
// code to reset the background
if(path.y > 400){
path.y = height/2
}
function draw() {
  background(0);

}
