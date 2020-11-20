
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(500,600,500,500);
  ground = new Ground(400,690,800,20);
  boy = new Boy(150,600,250,250);
  stone = new Stone(80,530,25,25);
  mango1 = new Mango(550,650,20,20);
 
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
  Engine.update(engine);
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  
 
 
}



