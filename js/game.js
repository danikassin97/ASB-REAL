$(document).ready(function(){



  $(document).keydown(function(theEvent){
    // theEvent.preventDefault();

console.log(theEvent.which);
    //up arrow
    if (theEvent.which === 37){

      $(".container").html("<div class='ball'></div>");
      $(".container").addClass("left");

      setTimeout(function(){
        $(".container").empty();
        $(".container").removeClass("left");
      }, 2000);
    }

      else if (theEvent.which === 38){

        $(".container").html("<div class='rocket'></div>");
        $(".container").addClass("up");

        setTimeout(function(){
          $(".container").empty();
          $(".container").removeClass("up");
        }, 2000);
      }

      if (theEvent.which === 39){

        $(".container").html("<div class='bowser'></div>");
        $(".container").addClass("right2");
        setTimeout(function(){
          $(".container").empty();
          $(".container").removeClass("right2");
        }, 2000);
      }

        else if (theEvent.which === 40){


          // $(".container").html("<div class='rocket'></div>");
          // $("body").html(" class='shake'");
          $("body").addClass("bottom earthquake");
          $(".container").html("<img url='img/crack.png'>");


          setTimeout(function(){
            // $(".container").empty();
            // $("body").empty();
            $("body").removeClass("bottom earthquake");
          }, 2000);
    }
}
);
});
    $(document).ready(function(){



      $(document).keydown(function(theEvent){
        // theEvent.preventDefault();

    console.log(theEvent.which);
        //up arrow
        if (theEvent.which === 39){

          $(".container").html("<div class='bowser'></div>");
          $(".container").addClass("right2");
          setTimeout(function(){
            $(".container").empty();
            $(".container").removeClass("right2");
          }, 2000);
        }


});
});
