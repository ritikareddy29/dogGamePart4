var player, playerCount, form;
var dog1, dog2, obstacles, fuels;
var dogs = [];

function preload() {

}

function setup() {
  canvas = createCanvas(700, 700);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
} 

function draw() {
  background("white");
  drawSprites();
}
