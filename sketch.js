var ground, paper,bucket1, bucket2, bucket3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	bucket1=createSprite(1000,650,200,20);
	bucket1.shapeColor="red";

	bucket2=createSprite(900,610,20,100);
	bucket2.shapeColor="red";

	bucket3=createSprite(1100,610,20,100);
	bucket3.shapeColor="red";
	//Create the Bodies Here.
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);

 paper = new Paper(60,660,50,50);
ground = new Ground(400,680,2600,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25);
Engine.update(engine);
  paper.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y:-15});
}

}

