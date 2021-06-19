const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


//Create multiple bobs, mulitple ropes varibale here

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//created roof here
	roof1 = new roof(400,100,310,40);

	//creating bobs here
	bob5 = new bob(482,330,50);
	bob4 = new bob(439,330,50);
	bob3 = new bob(396,330,50);
	bob2 = new bob(353,330,50);
	bob1 = new bob(310,330,50);

	//creating ropes here
	rope1 = new rope(bob1.body,roof1.body,-50*2,0);
	rope2 = new rope(bob2.body,roof1.body,-25*2,0);
	rope3 = new rope(bob3.body,roof1.body,-0*2,0);
	rope4 = new rope(bob4.body,roof1.body,25*2,0);
	rope5 = new rope(bob5.body,roof1.body,50*2,0);


	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  roof1.display();

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
  bob5.display();
  bob4.display();
  bob3.display();
  bob2.display();
  bob1.display();

  
  keyPressed();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
}