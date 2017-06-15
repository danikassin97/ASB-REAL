var canvas = document.getElementById("my-canvas");
canvas.height = $(document).height()*0.97;
canvas.width = $(document).width()*0.97;
var ctx = canvas.getContext("2d");

var backgroundImage = new Image();
backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

backgroundImage.onload = function(){
  ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
};

var lebrony = 400;
var joy = 430;
var lebron = new Image();
lebron.src = "img/lebron.png";

lebron.onload = function (){
  ctx.drawImage(lebron,880,lebrony,230,240);
};
var jo = new Image();
jo.src = "img/joe.png";

jo.onload = function (){
ctx.drawImage(jo,220,joy,200,210);
};
setTimeout (function(){
  var jo = new Image();
  jo.src = "img/joe.png";

jo.onload = function (){
  ctx.drawImage(jo,220,joy,200,210);
};
},50);

setTimeout (function(){
var lebron = new Image();
lebron.src = "img/lebron.png";

lebron.onload = function (){
  ctx.drawImage(lebron,880,lebrony,230,240);
  console.log(lebron.y);
};
},50);

// var lebron = new Image();
// lebron.src = "img/lebron.png";
//
// var jo = new Image();
// jo.src = "img/joe.png";

// static pics


var health=100;
var health1=100;

setTimeout (function(){
ctx.fillStyle="green";
ctx.fillRect(90,20,(health/100)*280,50);

ctx.fillStyle="red";
ctx.font = "50px fire";
ctx.fillText("AMAZING SMASH BROS",390,70);

ctx.fillStyle="red";
ctx.font = "50px fire";
ctx.fillText("FIGHT",590,170);

ctx.fillStyle="green";
ctx.fillRect(90,20,(health/100)*280,50);

ctx.fillStyle="green";
ctx.fillRect(990, 20,(health1/100)*280,50);
},50);

// Whenever you lose health
//
health-=20;

//Whenever you lose health

// health-=1;
