
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball, chain;
var b1,b2,b3,b4,b5,b6;
var buildings = [];

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,780);
	ball = new Ball(200,50);
	chain = new Chain(ball.body, {x:400,y:50});

	b1 = new Build(600,770);
	b2 = new Build(600,700);
	b3 = new Build(600,630);
	b4 = new Build(600,540);
	b5 = new Build(600,470);

	for(var i=0; i<5; i++) 
	{
		buildings.push(new Build(800,770-70.1*i));
		console.log(buildings[i]);
	}

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  chain.display();
  ball.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  for(var i=0; i<buildings.length; i++) {
	  buildings[i].display();
  }

}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}



