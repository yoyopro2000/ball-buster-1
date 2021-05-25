var pinkball,greenball,redball,orangeball,blueball,yellowball;
var slingshot;

function setup(){
createCanvas(1700,700)
for(var i = 25; i<1700; i = i + 50){
 pinkball = createSprite(i,15,30,30)
}
for(var i = 25; i<1700; i = i + 50){
 greenball = createSprite(i,55,30,30)
}
for(var i = 25; i<1700; i = i + 50){
 redball = createSprite(i,95,30,30)
}
   for(var i = 25; i<1700; i = i + 50){
  orangeball = createSprite(i,135,30,30)
} 
   for(var i = 25; i<1700; i = i + 50){
  blueball = createSprite(i,175,30,30)
}
   for(var i = 25; i<1700; i = i + 50){
  yellowball = createSprite(i,215,30,30)
}
}
function draw(){
 background("yellow")  
 drawSprites();
}
