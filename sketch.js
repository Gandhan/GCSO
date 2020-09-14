var car,wall;

var weight,speed,deformation;

var state;



function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 70, 50);
  wall = createSprite(1500,200,20,400);
  weight=random(400,1500);
  speed = random(55,90);
  deformation = 0.5*weight*speed*speed/22500;
  state = "wait";
}

function draw() {
  background(0);  
  
  textSize = 1000;
  
  

  text("Car Survival Advice :",750,100);
  car.shapeColor = ("white");
  car.velocityX = speed;
  car.collide(wall);
  //car.x = mouseX;
 // car.y = mouseY;
  
  wall.shapeColor = (80,80,80);
  


  if(deformation < 100 && state === "show") {
    car.shapeColor = "green";
    text("Good to Go!",870,100);
  }
  if(deformation >= 100 && deformation < 180 && state === "show") {
    car.shapeColor = "yellow";
    text("Would Work",870,100);
  }
  
  if(deformation >= 180 && state === "show") {
    car.shapeColor = "red";
    text("Better Replace",870,100);
  }
  
  if((car.x - wall.x <= car.width/2 + wall.width/2) && (wall.x - car.x <= car.width/2 + wall.width/2)) {
    //car.shapeColor = "blue";
    //wall.shapeColor = "blue";
    state = "show";
    car.velocityX = 0;
  }
  drawSprites();
  
}