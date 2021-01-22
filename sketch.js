
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,
box12,box13,box14,box15,box16,box17,box18;
var polygon,poly_img,polygonBody;
var ground,ground2,ground3;
var sling;

function preload(){
  poly_img=loadImage("polygon.png");
}



function setup(){
  createCanvas(2000,1000);
   

  


    polygon=createSprite(300,200,50,50);
    polygon.addImage(poly_img);
    polygon.scale=0.2;



    engine = Engine.create();
    world = engine.world;

   // imageMode(CENTER);
   // image(poly_img,polygon.position.x,polygon.position.y,40,40);
    polygonBody=Bodies.rectangle(150,600,70,70);
    World.add(world,polygonBody);
 

    ground=new Ground(1000,980,2000,30);
  

   sling= new Chain(polygonBody,{x:450,y:400});
// second pltform
    ground2=new Ground(1100,650,400,30)
    
    box1= new Box(1030,635,70,60);
    box2= new Box(1060,635,70,60);
    box3= new Box(1090,635,70,60);
    box4= new Box(1120,635,70,60);
    box5= new Box(1150,635,70,60);

    box6= new Box(1060,635,70,60);
    box7= new Box(1090,635,70,60);
    box8= new Box(1120,635,70,60);

    box9=new Box(1090,600,70,60);


    // first platfrom
    ground3=new Ground(1290,250,400,30)
    
    box10= new Box(1230,235,70,60);
    box11= new Box(1260,235,70,60);
    box12= new Box(1290,235,70,60);
    box13= new Box(1320,235,70,60);
    box14= new Box(1350,235,70,60);

    box15= new Box(1260,235,70,60);
    box16= new Box(1290,235,70,60);
    box17= new Box(1320,235,70,60);

    box18=new Box(1290,200,70,60);
  



}

function draw(){
  rectMode(CENTER);
    background("black");
  
    polygon.x=polygonBody.position.x;
    polygon.y=polygonBody.position.y;

    //grounds/platforms displayed
    ground.display();
    ground2.display();
    ground3.display();


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();  
    box9.display();


    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();





    Engine.update(engine);

    drawSprites();

}
function mouseDragged(){

	polygonBody.position.x=mouseX;
	polygonBody.position.y=mouseY;

}

function mouseReleased(){

	sling.fly();

}