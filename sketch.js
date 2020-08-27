const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,600);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 
 hand1 = new Hands(400,300); 
 hand2 = new Minute(400,300);
 hand3 = new Hour(400,300);
}

function draw() {
  background(0);  
  strokeWeight(5);
  //arc (50,55,80,80,PI+QUATER_PI,TWO_PI);
  noFill ();
  hand1.display();
  hand2.display();
  hand3.display();
  drawSprites();

}