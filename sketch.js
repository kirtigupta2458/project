
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  stoneObject = new stone(240,420,50)
	mango1=new mango(1100,130,40);
	mango2=new mango(1170,120,40);
	mango3=new mango(1030,120,40);
	mango4=new mango(960,190,40);
	mango5=new mango(1090,40,40);
	mango6=new mango(1180,200,40);
	mango7=new mango(1110,200,40);
	mango8=new mango(1020,230,40);
	mango9=new mango(900,180,40);
	mango10=new mango(1240,230,40);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
  slingshot = new SlingShot(stoneObject.body,{x:240,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  
  treeObj.display();
  stoneObject.display();
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
  groundObject.display();
  slingshot.display();

  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  detectCollision(stoneObject,mango6);
  detectCollision(stoneObject,mango7);
  detectCollision(stoneObject,mango8);
  detectCollision(stoneObject,mango9);
  detectCollision(stoneObject,mango10);

}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body, {x:235, y:420}) 
	  slingshot.attached(stoneObject.body);
	}
  }

  function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
  