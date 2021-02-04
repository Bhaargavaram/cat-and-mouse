var canvas,garden;
var together;
var cat, catImage1,catImage2,catImage3;
var mouse, mouseImage1,mouseImage2,mouseImage3;

function preload() {
    garden = loadImage("garden.png");
    catImage1= loadAnimation("catOne.png");
    catImage2=loadAnimation("catTwo.png","catThree.png");
    catImage3= loadAnimation("catFour.png");
    mouseImage1=loadAnimation("mouseOne.png");
    mouseImage2= loadAnimation("mouseTwo.png","mouseThree.png");
    mouseImage3=loadAnimation("mouseFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImage1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImage1);
    mouse.scale = 0.15;

}

function draw() {

    background(garden);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImage3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImage3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImage2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImage2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}
