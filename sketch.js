var thickness,wall;
var bullet,weight,speed;

function setup() {
  createCanvas(800,400);


bullet= createSprite(100, 200, 10, 10);
bullet.shapeColor= "white" 

wall= createSprite(780, 200, thickness, 100);
wall.shapeColor= color(80,80,80) 

 
 speed= random(190 , 240)
 bullet.velocityX= speed/100;

weight= random(30,52)
thickness= random(22,83)

}

function draw() {
  background("black");
  if (hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   
    if (damage>10) {
     wall.shapeColor=color(255,0,0);
      
    }
    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }
   }
 drawSprites();
}
function hasCollided(lbullet, lwall) 
{
 bulletRightEdge=lbullet.x +lbullet.width;
 wallLeftEdge=lwall.x;

if (bulletRightEdge>=wallLeftEdge) {
  return true
}
return false
}






