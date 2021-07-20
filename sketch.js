var canvas;
var block1,block2,block3,block4;
var ball, edges;
var backgroundMusic

function preload(){
    
    backgroundMusic = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510, 580, 200, 30)
    block3.shapeColor = "red";

    block4 = createSprite(720, 580, 200, 30)
    block4.shapeColor = "purple";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(160,130,130);
    ball.velocityX = 25;
    ball.velocityY = 25;

}

function draw() {
    background(rgb(69,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        backgroundMusic.play()
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
       
        backgroundMusic.stop();
        
    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "red";
        
    }

    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "purple";
        
    }


    drawSprites();
}
