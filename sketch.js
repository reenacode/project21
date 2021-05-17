var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
 music=loadSound("music.mp3"); // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,30,30,30);
    block1.shapeColor = "blue";

    block2 = createSprite(150,30,30,30);
    block2.shapeColor = "orange";

    block3 = createSprite(200,30,30,30) ;//create two more blocks i.e. block3 and block4 here
    block3.shapeColor="yellow";

    block4 = createSprite(250,30,30,30);
    block4.shapeColor="green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX=3; //write code to add velocityX and velocityY
    ball.velocityY=-3;


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
       music.stop();
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.stop();
        //write code to stop music
    }

   if(block3.isTouching(ball) && ball.bounceOff(block3)){
       ball.shapeColor = "yellow";
       music.stop();
    }

    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
         ball.shapeColor = "green";
         music.stop();
       }
       //write code to bounce off ball from the block4

       drawSprites();
    }
    
    

    