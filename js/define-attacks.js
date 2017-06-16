
health = 100;
health1 = 100;

function Head (){
  this.x = 860;
  this.y = 450;

  var head = new Image();
  head.src = "img/dani-throw.png";

  var backgroundImage = new Image();
  backgroundImage.src = "img/background.png";

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

  ctx.clearRect(xCord,450,65,65);
  ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
  ctx.drawImage(lebron,880,lebrony,230,240);
  ctx.drawImage(jo,220,joy,200,210);

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

  ctx.fillStyle="red";
  ctx.font = "50px fire";
  ctx.fillText("AMAZING SMASH BROS",390,70);

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

  var backgroundImage1 = new Image();
  backgroundImage1.src = "img/smash1.png";
  backgroundImage1.onload = function(){
  ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
  };

           ctx.drawImage(face, xCord, 450,65,65);


          xCord -= 20;
          if (xCord <= 200) {
            clearInterval(interval);

            ctx.clearRect(xCord,450,65,65);
            ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            ctx.drawImage(lebron,880,lebrony,230,240);
            ctx.drawImage(jo,220,joy,200,210);

            setTimeout (function(){

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

            ctx.fillStyle="red";
            ctx.font = "50px fire";
            ctx.fillText("AMAZING SMASH BROS",390,70);

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

            var backgroundImage1 = new Image();
            backgroundImage1.src = "img/smash1.png";
            backgroundImage1.onload = function(){
            ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
            };

            },50);
          }
          if (xCord < 420 && joy > 350){
            console.log("HERE EWE GOO");
            health -=20;
            ctx.clearRect(xCord,450,65,65);
            ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            ctx.drawImage(lebron,880,lebrony,230,240);
            ctx.drawImage(jo,220,joy,200,210);

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

            ctx.fillStyle="red";
            ctx.font = "50px fire";
            ctx.fillText("AMAZING SMASH BROS",390,70);

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

            var backgroundImage1 = new Image();
            backgroundImage1.src = "img/smash1.png";
            backgroundImage1.onload = function(){
            ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
            };
            if (health <= 0) {

              alert("Hello, you lost!");

              health = 100;

              document.location.reload();

              theEvent.preventDefault();


            }
            clearInterval(interval);


                }
       }, 30);
       setTimeout (function(){

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

       ctx.fillStyle="red";
       ctx.font = "50px fire";
       ctx.fillText("AMAZING SMASH BROS",390,70);

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

       var backgroundImage1 = new Image();
       backgroundImage1.src = "img/smash1.png";
       backgroundImage1.onload = function(){
       ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
       };
       },50);
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

           ctx.fillStyle="red";
           ctx.font = "50px fire";
           ctx.fillText("AMAZING SMASH BROS",390,70);

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

           var backgroundImage1 = new Image();
           backgroundImage1.src = "img/smash1.png";
           backgroundImage1.onload = function(){
           ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
           };

            // if (xCord === 200) {
            //   clearInterval(interval);
            //   var backgroundImage = new Image();
            //   backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";
            //
            //   backgroundImage.onload = function(){
            //     ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            //   };
            //
            //   setTimeout (function(){
            //   var jo = new Image();
            //   jo.src = "img/joe.png";
            //
            //   jo.onload = function (){
            //     ctx.drawImage(jo,220,joy,200,210);
            //   };
            // },10);
            //
            //   setTimeout (function(){
            //   var lebron = new Image();
            //   lebron.src = "img/lebron.png";
            //
            //   lebron.onload = function (){
            //     ctx.drawImage(lebron,880,lebrony,230,240);
            //   };
            // },10);
            //
            // }
          }
        else if (xCord < 530){
          yCord +=10;
           xCord -= 20;

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

           ctx.fillStyle="red";
           ctx.font = "50px fire";
           ctx.fillText("AMAZING SMASH BROS",390,70);

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

           var backgroundImage1 = new Image();
           backgroundImage1.src = "img/smash1.png";
           backgroundImage1.onload = function(){
           ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
           };

            if (xCord === 200) {
              clearInterval(interval);
              var backgroundImage = new Image();
              backgroundImage.src = "img/background.png";

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
        setTimeout (function(){

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

        ctx.fillStyle="red";
        ctx.font = "50px fire";
        ctx.fillText("AMAZING SMASH BROS",390,70);

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

        var backgroundImage1 = new Image();
        backgroundImage1.src = "img/smash1.png";
        backgroundImage1.onload = function(){
        ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
        };

        if (health <= 0) {

          alert("Hello, you lost!");
          theEvent.preventDefault();


        }
        },50);

       }, 30);

       setTimeout (function(){

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

       ctx.fillStyle="red";
       ctx.font = "50px fire";
       ctx.fillText("AMAZING SMASH BROS",390,70);

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

       var backgroundImage1 = new Image();
       backgroundImage1.src = "img/smash1.png";
       backgroundImage1.onload = function(){
       ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
       };
       },50);

       health -=10;

};

}
// ----------------------------------------------------------------------------------

function Sword (){
  this.x = 420;
  this.y = 450;

  var sword = new Image();
  sword.src = "img/sword.png";

  var backgroundImage = new Image();
  backgroundImage.src = "img/background.png";

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

  ctx.clearRect(xCord,450,90,90);
  ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
  ctx.drawImage(lebron,880,lebrony,230,240);
  ctx.drawImage(jo,220,joy,200,210);

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

  ctx.fillStyle="red";
  ctx.font = "50px fire";
  ctx.fillText("AMAZING SMASH BROS",390,70);

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

  var backgroundImage1 = new Image();
  backgroundImage1.src = "img/smash1.png";
  backgroundImage1.onload = function(){
  ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
  };

           ctx.drawImage(sword, xCord, 450,90,90);


          xCord += 20;
          if (xCord >= 1100) {
            clearInterval(interval);

            ctx.clearRect(xCord,450,90,90);
            ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            ctx.drawImage(lebron,880,lebrony,230,240);
            ctx.drawImage(jo,220,joy,200,210);

            setTimeout (function(){

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

            ctx.fillStyle="red";
            ctx.font = "50px fire";
            ctx.fillText("AMAZING SMASH BROS",390,70);

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

            var backgroundImage1 = new Image();
            backgroundImage1.src = "img/smash1.png";
            backgroundImage1.onload = function(){
            ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
            };

            },50);
          }
          if (xCord > 880 && lebrony > 350){
            console.log("HERE EWE GOO");
            health1 -=20;
            ctx.clearRect(xCord,450,65,65);
            ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            ctx.drawImage(lebron,880,lebrony,230,240);
            ctx.drawImage(jo,220,joy,200,210);

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

            ctx.fillStyle="red";
            ctx.font = "50px fire";
            ctx.fillText("AMAZING SMASH BROS",390,70);

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

            var backgroundImage1 = new Image();
            backgroundImage1.src = "img/smash1.png";
            backgroundImage1.onload = function(){
            ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
            };
            if (health1 <= 0) {

              alert("Hello, you lost!");

              health1 = 100;

              document.location.reload();

              theEvent.preventDefault();


            }
            clearInterval(interval);


                }
       }, 30);

       setTimeout (function(){

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

       ctx.fillStyle="red";
       ctx.font = "50px fire";
       ctx.fillText("AMAZING SMASH BROS",390,70);

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

       var backgroundImage1 = new Image();
       backgroundImage1.src = "img/smash1.png";
       backgroundImage1.onload = function(){
       ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
       };
       },50);
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

           ctx.fillStyle="red";
           ctx.font = "50px fire";
           ctx.fillText("AMAZING SMASH BROS",390,70);

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

           var backgroundImage1 = new Image();
           backgroundImage1.src = "img/smash1.png";
           backgroundImage1.onload = function(){
           ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
           };

          //  ctx.drawImage(wheelchair, xCord, yCord,65,65);

            // if (xCord === 1100) {
            //   clearInterval(interval);
            //   var backgroundImage = new Image();
            //   backgroundImage.src = "https://media.giphy.com/media/Lr9bbaVAyt3RC/giphy.gif";
            //
            //   backgroundImage.onload = function(){
            //     ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
            //   };
            //
            //   setTimeout (function(){
            //   var jo = new Image();
            //   jo.src = "img/joe.png";
            //
            //   jo.onload = function (){
            //     ctx.drawImage(jo,220,joy,200,210);
            //   };
            // },10);
            //
            //   setTimeout (function(){
            //   var lebron = new Image();
            //   lebron.src = "img/lebron.png";
            //
            //   lebron.onload = function (){
            //     ctx.drawImage(lebron,880,lebrony,230,240);
            //   };
            // },10);
            //
            // }
          }
        else if (xCord > 730){
          yCord +=10;
           xCord += 20;

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

           ctx.fillStyle="red";
           ctx.font = "50px fire";
           ctx.fillText("AMAZING SMASH BROS",390,70);

           ctx.fillStyle="green";
           ctx.fillRect(90,20,(health/100)*280,50);

           ctx.fillStyle="green";
           ctx.fillRect(990, 20,(health1/100)*280,50);

           var backgroundImage1 = new Image();
           backgroundImage1.src = "img/smash1.png";
           backgroundImage1.onload = function(){
           ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
           };

            if (xCord === 1100) {
              clearInterval(interval);
              var backgroundImage = new Image();
              backgroundImage.src = "img/background.png";

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
            setTimeout (function(){

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

            ctx.fillStyle="red";
            ctx.font = "50px fire";
            ctx.fillText("AMAZING SMASH BROS",390,70);

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

            var backgroundImage1 = new Image();
            backgroundImage1.src = "img/smash1.png";
            backgroundImage1.onload = function(){
            ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
            };

            if (health1 <= 0) {

              alert("Hello, you lost!");
              theEvent.preventDefault();


            }
            },50);

          },30);

       setTimeout (function(){

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

       ctx.fillStyle="red";
       ctx.font = "50px fire";
       ctx.fillText("AMAZING SMASH BROS",390,70);

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

       var backgroundImage1 = new Image();
       backgroundImage1.src = "img/smash1.png";
       backgroundImage1.onload = function(){
       ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
     };

       },50);

       health1 -=10;

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
    ctx.drawImage(jo,220,joy,220,210);

        lebrony-=50;
        console.log('jumping: ' + lebrony);
        ctx.drawImage(lebron,880,lebrony,230,240);

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

        ctx.fillStyle="red";
        ctx.font = "50px fire";
        ctx.fillText("AMAZING SMASH BROS",390,70);

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

        var backgroundImage1 = new Image();
        backgroundImage1.src = "img/smash1.png";
        backgroundImage1.onload = function(){
        ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
        };
}
    else if (lebrony < jump_y )  {
        {
        console.log("hi");
      goingDown = true;
      ctx.clearRect(880,lebrony,230,240);
      ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
      ctx.drawImage(jo,220,joy,220,210);

          lebrony +=50;
          console.log('jumping: ' + lebrony);

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

          ctx.fillStyle="red";
          ctx.font = "50px fire";
          ctx.fillText("AMAZING SMASH BROS",390,70);

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

          var backgroundImage1 = new Image();
          backgroundImage1.src = "img/smash1.png";
          backgroundImage1.onload = function(){
          ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
          };

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

        ctx.fillStyle="red";
        ctx.font = "50px fire";
        ctx.fillText("AMAZING SMASH BROS",390,70);

        ctx.fillStyle="green";
        ctx.fillRect(90,20,(health/100)*280,50);

        ctx.fillStyle="green";
        ctx.fillRect(990, 20,(health1/100)*280,50);
        ctx.drawImage(jo,220,joy,200,230);

        ctx.fillStyle="black";
        ctx.font = "35px fire";
        ctx.fillText("Joe", 100, 60);

        ctx.fillStyle="black";
        ctx.font = "35px fire";
        ctx.fillText("Lebron", 1160, 60);

        var backgroundImage1 = new Image();
        backgroundImage1.src = "img/smash1.png";
        backgroundImage1.onload = function(){
        ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
        };

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

          ctx.fillStyle="red";
          ctx.font = "50px fire";
          ctx.fillText("AMAZING SMASH BROS",390,70);

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

          var backgroundImage1 = new Image();
          backgroundImage1.src = "img/smash1.png";
          backgroundImage1.onload = function(){
          ctx.drawImage(backgroundImage1,0,75,canvas.width,150);
          };

          ctx.drawImage(jo,220,joy,200,230);
      }

    }

},150);
};
