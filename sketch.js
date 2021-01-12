
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
var roof1,engine,world

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bd=40
	startBobpositionX=width/2
	startBobpositionY=height/4+500
	bob1=new Bob(startBobpositionX-bd*2,startBobpositionY,bd)
	bob2=new Bob(startBobpositionX-bd,startBobpositionY,bd)
	bob3=new Bob(startBobpositionX,startBobpositionY,bd)
	bob4=new Bob(startBobpositionX+bd,startBobpositionY,bd)
	bob5=new Bob(startBobpositionX+bd*2,startBobpositionY,bd)
	roof1=new Roof(width/2,height/4,width/7,20);
	rope1=new Rope(bob1.body,roof1.body,-bd*2,0);
	rope2=new Rope(bob2.body,roof1.body,-bd,0)
	rope3=new Rope(bob3.body,roof1.body,0,0)
	rope4=new Rope(bob4.body,roof1.body,bd,0)
	rope5=new Rope(bob5.body,roof1.body,bd*2,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine)

    bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof1.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	

  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})

	}


}


