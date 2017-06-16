$(document).ready(function(){

  $(document).keydown(function(theEvent){
    // theEvent.preventDefault();

console.log(theEvent.which);
    //up arrow
    if (theEvent.which === 37){

      setTimeout( function (){},4000);
      var head = new Head();
      // head.draw();
         ctx.save();
      head.update(860);

  }
  else if (theEvent.which === 38){
    var macbook = new Macbook();
    // head.draw();
       ctx.save();
    macbook.update(860,450);

      }
    });
  }
);

$(document).ready(function(){

  $(document).keydown(function(theEvent){
    // theEvent.preventDefault();

console.log(theEvent.which);
    //up arrow
    if (theEvent.which === 88){
      var sword = new Sword();
      // head.draw();
         ctx.save();
      sword.update(400);

  }

  else if (theEvent.which === 90){
    var wheelchair = new Wheelchair();
    // head.draw();
       ctx.save();
    wheelchair.update(400,450);

      }
    });
  }
);


$(document).ready(function(){

  $(document).keydown(function(theEvent){
    // theEvent.preventDefault();

console.log(theEvent.which);
    //up arrow
    console.log('Bronbron');
    if (theEvent.which === 32){
      console.log('Bronbron JUMPING');
    var jumping = setInterval(lebron.Jump(),100);


      }
    }
  );
});


$(document).ready(function(){

  $(document).keydown(function(theEvent){
    console.log('Joe');
    if (theEvent.which === 83) {
      console.log('Joe JUMPIN');
    var jumping1 = setInterval(jo.Jump1(),100);
      }
    });
  }
);
