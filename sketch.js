var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var carImg1,carImg2, carImg3, carImg4, trackImg, groundImg;

function preload(){
carImg1 = loadImage("ïmages/car1.png");
carImg2 = loadImage("ïmages/car2.png");
carImg3 = loadImage("ïmages/car3.png");
carImg4 = loadImage("ïmages/car4.png");

trackImg = loadImage("images/track.jpg");

groundImg = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
}
