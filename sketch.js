var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_img,car2_img,car3_img,car4_img,track,ground;

function preload(){
car1_img = loadImage("images/car1.png");
car2_img = loadImage("images/car2.png");
car3_img = loadImage("images/car3.png");
car4_img = loadImage("images/car4.png");
track = loadImage("images/track.jpg");
ground = loadImage("images/ground.png");
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
  if(gameState === 2){
    // game.update(2)  // Till now carsAtEnd are not recorded in the database, so we won't be able to fetch the info about other players if they have reached the end or not..
    // and if we update the gameState to 2, game.play() will not be called for other players and they will stop moving
    //ok,so I need to create carsatend and then gamestate will change to 2 in db
    // Actuallly as per logic in curriculum, we need not chate gameState in db. as it is changed locally for every player when it reaches the desired position
    //so,we are not going to change to 2 in db,in full game?  Yes.. 
    //Allow me a moment. Let me check the final code as well   ok
    // Yes it is not changed in final game as well ok,thank you so much :)
    game.end();
    
  }
}
