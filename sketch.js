
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;

var bin1,bin2,bin3,bin4;

function preload()
{
  bg=loadImage("BG.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.

  paper1 = new Paper(50,650,30,30)
  
  bin4 = new Bin2(0,0,150,100)

	ground = new Ground(350,680,900,20)

  bin1 = new Bin(600,620,20,100)
  bin1.visible=false
  bin2 = new Bin(750,620,20,100)
  bin3 = new Bin(675,660,150,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg);

  paper1.display();
  
  bin4.display();

  ground.display();
  
  bin1.display();
  bin2.display();
  bin3.display();

  if(keyWentDown(RIGHT_ARROW)) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35})
  }

  drawSprites(); 
 
}
