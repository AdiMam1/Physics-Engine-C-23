const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(100,100,20,20);
    ground = new Ground(200,390,400,30);
    box2 = new  Box(110,240,40,40);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
  

    
    box.display();
    ground.display();
    box2.display();

}