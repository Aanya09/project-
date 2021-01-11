class Particles{
constructor(x,y,r){
var options={

restitution:0.4
}
this.r=r;
this.body = Bodies.circle(x,y,this.r,positions);
this.color=(random(0,255),random(0,255),random(0,255))
World.add(world,this.body);
}
display(){
var pos=this.body.position;
var angles=thid.body.angles;

push();
translate(pos.x,pos.y);
rotate(angle)
noStroke();
fill(this.color)
ellipseMode(RADIUS);
ellipseMode(0,0,this.r,this.r);
pop();

}




}