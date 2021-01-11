var particles,ground,plinkos;
var canvas,backGroundImage;
var divisionHeight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles=[];
var plinkos=[];
var division=[];
function draw() {
  background(255,255,255);  
  drawSprites();
}
for (var j=40,j<=width)