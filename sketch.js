var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(50,495,100,20);
    
    


    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
}
