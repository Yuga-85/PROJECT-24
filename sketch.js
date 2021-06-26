
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var basket, paper, ground, world;



function setup() {
	createCanvas(1600, 700);
  
  rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(100,600,35);

     ground = new Ground(width/2, 670, width, 20);

     basket = new Basket(1200, 650)
 
     var render = Render.create({
      element: document.body,
      engine: engine ,
      options: {
        width: 1200,
        height:700,
        wireframes: false
      }
     })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  ground.display();
  basket.display();
   
 
}


function keyPressed() {
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce( paperObject.body, papeObjectr.body.position, {x:85,y:-85})
	}
}

