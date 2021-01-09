
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var boyimg,boy;
var ground,treeImg;
var mangoImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stoneImg;

function preload()
{   
	boyimg = loadImage("sprites/boy.png");
	treeImg = loadImage("sprites/tree.png");
	stoneImg = loadImage("sprites/stone.png");
  mangoImg = loadImage("sprites/mango.png");

	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,600,10,10);
	boy.addImage(boyimg);
	boy.scale = 0.15;

	ground = new Ground(200,height,2400,50);

	tree = createSprite(1000,400,10,10);
	tree.addImage(treeImg);
	tree.scale = 0.5;
	

	stone = createSprite(120,500,20,20);
	stone.addImage(stoneImg);
	stone.scale = 0.1;
	

	//creating the mangoes 
	mango1 = createSprite(900,200,20,20);
	mango1.addImage(mangoImg);
	mango1.scale = 0.15;

	mango2 = createSprite(800,300,10,20);
	mango2.addImage(mangoImg);
	mango2.scale = 0.15;

	mango3 = createSprite(1000,350,10,20);
	mango3.addImage(mangoImg);
	mango3.scale = 0.15;

	mango4 = createSprite(1200,350,10,20);
	mango4.addImage(mangoImg);
	mango4.scale = 0.15;

    mango5 = createSprite(1100,300,10,20);
	mango5.addImage(mangoImg);
	mango5.scale = 0.15;
	
	mango6 = createSprite(900,300,10,20);
	mango6.addImage(mangoImg);
	mango6.scale = 0.15;

	mango7 = createSprite(1100,200,10,20);
	mango7.addImage(mangoImg);
	mango7.scale = 0.15;

	mango8 = createSprite(1000,250,10,20);
	mango8.addImage(mangoImg);
	mango8.scale = 0.15;

	
	
 shot = new Shot(this.stone,{x:150,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  boy.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  shot.display();
  
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  drawSprites();
 
}



