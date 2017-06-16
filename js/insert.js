var canvas = document.getElementById("my-canvas");
canvas.height = $(document).height()*0.9;
canvas.width = $(document).width()*0.97;
var ctx = canvas.getContext("2d");

var backgroundImage = new Image();
backgroundImage.src = "img/background.png";

backgroundImage.onload = function(){
  ctx.drawImage(backgroundImage,30,0,canvas.width,canvas.height);
};

setTimeout (function(){
var backgroundImage1 = new Image();
backgroundImage1.src = "img/smash1.png";
backgroundImage1.onload = function(){
  ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
};
},40);

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
var backgroundImage1 = new Image();
backgroundImage1.src = "img/smash1.png";
backgroundImage1.onload = function(){
ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
};

var border = new Image();
border.src = "img/border.png";

border.onload = function(){
ctx.drawImage(border,85,-5,285,100);
};

var border1 = new Image();
border1.src = "img/border.png";

border1.onload = function(){
ctx.drawImage(border1,990,-5,285,100);
};

// ctx.fillStyle="green";
// ctx.fillRect(90,20,(health/100)*280,50);

ctx.fillStyle="red";
ctx.font = "50px fire";
ctx.fillText("AMAZING SMASH BROS",390,70);

ctx.fillStyle="red";
ctx.font = "150px fire";
ctx.fillText("FIGHT",480,440);

ctx.fillStyle="green";
ctx.fillRect(90,20,(health/100)*280,50);

ctx.fillStyle="green";
ctx.fillRect(990, 20,(health1/100)*280,50);

ctx.fillStyle="black";
ctx.font = "35px fire";
ctx.fillText("Joe", 100, 60);

ctx.fillStyle="black";
ctx.font = "35px fire";
ctx.fillText("Lebron", 1160, 60);

},50);



// Whenever you lose health
//

//Whenever you lose health

// health-=1;
