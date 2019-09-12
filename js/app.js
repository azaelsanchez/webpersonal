$(document).ready(function(){
  /*  $("button").click(function(){
        if($("button").text() == "☰"){
         $("button").text("🞬");
        }else{
          $("button").text("☰");
        }
      $("li").toggle("slow"); */
$('.navbar a').on('click', function(e){
    if(this.hash !==''){
        e.preventDefault();
        const hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 
     800
    );
    }
    $('.container').on('click', function(){
        $('.navbar').show();
    
    });
        });
    });
