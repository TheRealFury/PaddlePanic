var activePaddle = [0, 0, 0, 0, 0, 0, 0, 0];
var paddle1 = "";
var paddle2 = "";
var paddle3 = "";
var paddle4 = "";
var paddle5 = "";
var paddle6 = "";
var paddle7 = "";
var paddle8 = "";
var paddle = [paddle1, paddle2, paddle3, paddle4, paddle5, paddle6, paddle7, paddle8];

function preload(){
}
function setup(){
  createCanvas(890,610);
  paddle1 = createSprite(60, 580, 100, 10);
  paddle2 = createSprite(170, 580, 100, 10);
  paddle3 = createSprite(280, 580, 100, 10);
  paddle4 = createSprite(390, 580, 100, 10);
  paddle5 = createSprite(500, 580, 100, 10);
  paddle6 = createSprite(610, 580, 100, 10);
  paddle7 = createSprite(720, 580, 100, 10);
  paddle8 = createSprite(830, 580, 100, 10);
  paddle = [paddle1, paddle2, paddle3, paddle4, paddle5, paddle6, paddle7, paddle8]
}
function draw(){
  background(220);
  activePaddle = [0, 0, 0, 0, 0, 0, 0, 0];
  checkforKey();
  for(var i = 0; i < 8; i++){
    if(activePaddle[i] == 1){
      paddle[i].shapeColor = 'yellow';
    }
    else{
      paddle[i].shapeColor = 'grey';
    }
  }
  drawSprites();
}

function checkforKey(){
  if(keyIsDown(81) ){
    activePaddle[0] = 1;
  }
  if(keyIsDown(87)){
    activePaddle[1] = 1;
  }
  if(keyIsDown(69)){
    activePaddle[2] = 1;
  }
  if(keyIsDown(82)){
    activePaddle[3] = 1;
  }
  if(keyIsDown(85)){
    activePaddle[4] = 1;
  }
  if(keyIsDown(73)){
    activePaddle[5] = 1;
  }
  if(keyIsDown(79)){
    activePaddle[6] = 1;
  }
  if(keyIsDown(80)){
    activePaddle[7] = 1;
  }
}

function simultaneousKeys(){
  var numberOfKeys = 0;
  for(var i = 0; i < 7; i++){
    numberOfKeys += activePaddle[i];
  }
  if(numberOfKeys > 2){
    return true;
  }
  else{
    return false;
  }
}