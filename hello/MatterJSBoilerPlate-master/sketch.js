const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var back;
var boy, boyimg;
var tree, tree_image;
var rock;
var mango1,mango2,mango3,mango4,mango5,mango6
var score = 0;

function preload(){
	boyimg = loadImage("Plucking mangoes/boy.png");
	tree_image = loadImage("Plucking mangoes/tree.png");
	back = loadImage("Plucking mangoes/back.jpg");
}

function setup() {
	createCanvas(1550, 600);

	engine = Engine.create();
	world = engine.world;

	rock = new Rock(350,340,50,PI/2);

	boy = createSprite(400,400);
	boy.scale = 0.1
	boy.addImage("boy img",boyimg);

	tree = new Tree(1000,290);

	ground = new Ground(width / 2, height, width, 50);

	constraint1 = new Constraint(rock.body,{x:350,y:340});

	mango1 = new Mango(900,40,random(20,40),PI/2);
	mango2 = new Mango(950,80,random(20,40),PI/2);
	mango3 = new Mango(1000,120,random(20,40),PI/2);
	mango4 = new Mango(1100,160,random(20,40),PI/2);
	mango5 = new Mango(1050,200,random(20,40),PI/2);
	mango6 = new Mango(825,250,random(20,40),PI/2);
	mango7 = new Mango(1225,100,random(20,40),PI/2);
	mango8 = new Mango(1200,210,random(20,40),PI/2);
	mango9 = new Mango(825,140,random(20,40),PI/2);
	mango10 = new Mango(1250,180,random(20,40),PI/2);
	mango11 = new Mango(1050,50,random(20,40),PI/2);
	mango12 = new Mango(1300,180,random(20,40),PI/2);
	mango13 = new Mango(950,200,random(20,40),PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);

  tree.display();
  ground.display();
  rock.display();
  constraint1.display();

    mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();

	detectCollision(rock,mango1);
	detectCollision(rock,mango2);
	detectCollision(rock,mango3);
	detectCollision(rock,mango4);
	detectCollision(rock,mango5);
	detectCollision(rock,mango6);
	detectCollision(rock,mango7);
	detectCollision(rock,mango8);
	detectCollision(rock,mango9);
	detectCollision(rock,mango10);
	detectCollision(rock,mango11);
	detectCollision(rock,mango12);
    detectCollision(rock,mango13);

  drawSprites();
 fill("yellow");
 stroke("green");
 textSize(20);
 text("Press Space to get a second chance to eat YUMMY MANGOES!!",200,20);
}
function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	constraint1.fly();
}
function detectCollision(rock,mango){
	var distance = dist(rock.body.position.x,rock.body.position.y,mango.body.position.x,mango.body.position.y);

	if(distance<=mango.r+rock.r){
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
	   Matter.Body.setPosition(rock.body,{x:350,y:340});
	   constraint1.attach(rock.body);
	}
}
