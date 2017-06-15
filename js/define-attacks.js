

function Head (){
  this.x = 860;
  this.y = 450;

  var head = new Image();
  head.src = "img/dani-throw.png";

  var backgroundImage = new Image();
  backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

  backgroundImage.onload = function(){
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
  };

  this.update = function(x){

    function draw(ctx,pic){

     if (!pic.complete){
        setTimeout(function(){
          draw(ctx,pic);
        },50);
        return;
      }

      ctx.drawImage(pic,850,450,65,65);
    }
    var face = new Image();
    face.src = "img/dani-throw.png";
    draw(ctx,face);

      var xCord = 860;
      console.log("WHAT IS CTX" + ctx);


     var interval = setInterval(function() {
  console.log("are we repeating " + xCord);


  ctx.clearRect(xCord,450,65,65);
  ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
  ctx.drawImage(lebron,880,lebrony,230,240);
  ctx.drawImage(jo,220,joy,200,210);



           ctx.drawImage(face, xCord, 450,65,65);


          xCord -= 20;
          if (xCord <= 200) {
            clearInterval(interval);

            ctx.clearRect(xCord,450,65,65);
            ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            ctx.drawImage(lebron,880,lebrony,230,240);
            ctx.drawImage(jo,220,joy,200,210);

          }
       }, 30);


     };
}



function Macbook (){
  this.x = 860;
  this.y = 500;

  var macbook = new Image();
  macbook.src = "img/macbook.png";



  this.update = function(x,y){

    function draw(ctx,pic){

     if (!pic.complete){
        setTimeout(function(){
          draw(ctx,pic);
        },50);
        return;
      }

      ctx.drawImage(pic,860,500,65,65);
    }
    var macbook = new Image();
    macbook.src = "img/macbook.png";
    draw(ctx,macbook);

      var xCord = 860;
      var yCord = 500;


     var interval = setInterval(function() {
  console.log("are we repeating " + xCord + yCord);

           ctx.drawImage(macbook, xCord, yCord,65,65);

          if (xCord > 530) {
          yCord -=10;
           xCord -= 20;
            if (xCord === 200) {
              clearInterval(interval);
              var backgroundImage = new Image();
              backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

              backgroundImage.onload = function(){
                ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
              };

              setTimeout (function(){
              var jo = new Image();
              jo.src = "img/joe.png";

              jo.onload = function (){
                ctx.drawImage(jo,220,joy,200,210);
              };
            },10);

              setTimeout (function(){
              var lebron = new Image();
              lebron.src = "img/lebron.png";

              lebron.onload = function (){
                ctx.drawImage(lebron,880,lebrony,230,240);
              };
            },10);

            }
          }
        else if (xCord < 530){
          yCord +=10;
           xCord -= 20;
            if (xCord === 200) {
              clearInterval(interval);
              var backgroundImage = new Image();
              backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

              backgroundImage.onload = function(){
                ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
              };

              setTimeout (function(){
              var jo = new Image();
              jo.src = "img/joe.png";

              jo.onload = function (){
                ctx.drawImage(jo,220,joy,200,210);
              };
            },10);

              setTimeout (function(){
              var lebron = new Image();
              lebron.src = "img/lebron.png";

              lebron.onload = function (){
                ctx.drawImage(lebron,880,lebrony,230,240);
              };
            },10);

            }
        }

       }, 30);


};

}
// ----------------------------------------------------------------------------------

function Sword (){
  this.x = 420;
  this.y = 450;

  var sword = new Image();
  sword.src = "img/sword.png";

  var backgroundImage = new Image();
  backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

  backgroundImage.onload = function(){
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
  };

  this.update = function(x){

    function draw(ctx,pic){

     if (!pic.complete){
        setTimeout(function(){
          draw(ctx,pic);
        },50);
        return;
      }

      ctx.drawImage(pic,420,450,90,90);
    }
    var sword = new Image();
    sword.src = "img/sword.png";
    draw(ctx,sword);

      var xCord = 420;
      console.log("WHAT IS CTX" + ctx);


     var interval = setInterval(function() {
  console.log("are we repeating " + xCord);


  ctx.clearRect(xCord,450,90,90);
  ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
  ctx.drawImage(lebron,880,lebrony,230,240);
  ctx.drawImage(jo,220,joy,200,210);



           ctx.drawImage(sword, xCord, 450,90,90);


          xCord += 20;
          if (xCord >= 1100) {
            clearInterval(interval);

            ctx.clearRect(xCord,450,90,90);
            ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            ctx.drawImage(lebron,880,lebrony,230,240);
            ctx.drawImage(jo,220,joy,200,210);

          }
       }, 30);


     };
}

function Wheelchair (){
  this.x = 420;
  this.y = 500;

  var wheelchair = new Image();
  wheelchair.src = "img/wheelchair.png";



  this.update = function(x,y){

    function draw(ctx,pic){

     if (!pic.complete){
        setTimeout(function(){
          draw(ctx,pic);
        },50);
        return;
      }

      ctx.drawImage(pic,420,500,65,65);
    }
    var wheelchair = new Image();
    wheelchair.src = "img/wheelchair.png";
    draw(ctx,wheelchair);

      var xCord = 420;
      var yCord = 500;


     var interval = setInterval(function() {
  console.log("are we repeating " + xCord + yCord);

           ctx.drawImage(wheelchair, xCord, yCord,65,65);

          if (xCord < 730) {

          yCord -=10;
           xCord += 20;

           ctx.drawImage(wheelchair, xCord, yCord,65,65);

            if (xCord === 1100) {
              clearInterval(interval);
              var backgroundImage = new Image();
              backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

              backgroundImage.onload = function(){
                ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
              };

              setTimeout (function(){
              var jo = new Image();
              jo.src = "img/joe.png";

              jo.onload = function (){
                ctx.drawImage(jo,220,joy,200,210);
              };
            },10);

              setTimeout (function(){
              var lebron = new Image();
              lebron.src = "img/lebron.png";

              lebron.onload = function (){
                ctx.drawImage(lebron,880,lebrony,230,240);
              };
            },10);

            }
          }
        else if (xCord > 730){

          yCord +=10;
           xCord += 20;


           ctx.drawImage(wheelchair, xCord, yCord,65,65);


            if (xCord === 1100) {
              clearInterval(interval);
              var backgroundImage = new Image();
              backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";

              backgroundImage.onload = function(){
                ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
              };

              setTimeout (function(){
              var jo = new Image();
              jo.src = "img/joe.png";

              jo.onload = function (){
                ctx.drawImage(jo,220,430,200,210);
              };
            },10);

              setTimeout (function(){
              var lebron = new Image();
              lebron.src = "img/lebron.png";

              lebron.onload = function (){
                ctx.drawImage(lebron,880,400,230,240);
              };
            },10);

            }
        }

       }, 30);


};

}

var limit = 210;
var jump_y = 400;

Image.prototype.Jump = function (){
  var goingDown = false;
  lebrony = 400;
  setInterval ( function hi () {
    if (lebrony > limit && !goingDown){
    ctx.clearRect(880,lebrony,230,240);
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(jo,200,joy,220,210);

        lebrony-=50;
        console.log('jumping: ' + lebrony);
        ctx.drawImage(lebron,880,lebrony,230,240);
}
    else if (lebrony < jump_y )  {
        {
        console.log("hi");
      goingDown = true;
      ctx.clearRect(880,lebrony,230,240);
      ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
      ctx.drawImage(jo,200,joy,220,210);

          lebrony +=50;
          console.log('jumping: ' + lebrony);

          ctx.drawImage(lebron,880,lebrony,230,240);
      }
    }


},150);
};

Image.prototype.Jump1 = function (){
  var goingDown = false;
  joy = 400;
  setInterval ( function hi () {
    if (joy > limit && !goingDown){
    ctx.clearRect(220,joy,200,230);
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(lebron,880,lebrony,230,240);

        joy-=50;
        console.log('jumping: ' + joy);
        ctx.drawImage(jo,220,joy,200,230);


}
    else if (joy < jump_y )  {
        {
        console.log("hi");
      goingDown = true;
      ctx.clearRect(220,joy,200,230);
      ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
      ctx.drawImage(lebron,880,lebrony,230,240);


          joy +=50;
          console.log('jumping: ' + joy);

          ctx.drawImage(jo,220,joy,200,230);
      }

    }

},150);
};
