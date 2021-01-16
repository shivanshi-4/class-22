const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,width,20,options);
  World.add(world,ground);

  ball=Bodies.circle(200,100,20,{restitution:1})
  
  World.add(world,ball);

  console.log(ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER)
  fill (255)
  rect(ground.position.x,ground.position.y,width,20) 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  //drawSprites();
}