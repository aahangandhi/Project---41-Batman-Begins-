const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder1,thunder2,thunder3,thunder4;
var personWalking, personWalkingIMG
var canvas
var engine,world;
var waterDrop,waterDropImg;
var waterGroup;
var ground

function preload(){
    personWalkingIMG = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
    thunder1=loadImage("thunderbolt/1.png");
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4=loadImage("thunderbolt/4.png");
    waterDropImg = loadImage("waterdroplet.png");
}

function setup(){
  canvas = createCanvas(1500,700);
  waterGroup = new Group();;
   
   engine = Engine.create();
   world = engine.world;

   

   personWalking = createSprite(0,520,0,0);
   personWalking.addAnimation("man",personWalkingIMG);
   personWalking.scale = 0.4;
    
   ground = createSprite(750,660,1500,10);

   personWalking.setCollider("rectangle",50,-225,180,180);

   
}

function draw(){
    background("black");

    if(personWalking.x > 1500)
    {
      personWalking.x = 0;
  }


    //if(frameCount%5===0)
    //{
       var randXforWater = Math.round(random(10,1490));
      waterDrop = createSprite(randXforWater,10,5,5)
      waterDrop.addImage(waterDropImg)
      waterDrop.scale = 0.006;
      waterDrop.velocityY = 5;
      waterDrop.lifetime = 200;
      waterDrop.display();
      waterDrop.velocityY = 5;
      ground.depth = waterDrop.depth;
      waterDrop.depth = ground.depth + 1
      waterDrop.display();
  //  }

    if(waterGroup.isTouching(personWalking))
    {
        waterGroup.bounceOff(personWalking);
        waterGroup.velocityY = 5
    }
    


    
    

    personWalking.velocityX = 5;
    


    
    
 

    //personWalking.debug = true;    
   
    Engine.update(engine);
    
    thunderbolt();
    rain();
    drawSprites();
    
}   


function rain(){


  
}

function thunderbolt(){
  if(frameCount%70===0){
    var randX = Math.round(random(150,1350));
    var thunder = createSprite(randX,20,40,40);
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1:thunder.addImage(thunder1);
             break;
      case 2:thunder.addImage(thunder2);
             break;
      case 3:thunder.addImage(thunder3);
             break;
      case 4:thunder.addImage(thunder4);
             break;
      default:break;
    }
    thunder.scale = 0.5;
    thunder.lifetime = 50
  }
}


