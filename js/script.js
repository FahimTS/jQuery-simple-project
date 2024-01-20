$(document).ready(function (){
    $('.menubar').click(function(){
        $('.menu_bar ul').slideToggle()
    })
    $("#clc").click(function(){
        $(".ani_fa").animate({width: '100%'});
      });
    $("#clc").click(function(){
        $(".ani_fa h3").css({'text-align': 'center'});
        $(".ani_fa h3").css({'font-size': '20px'});
        $(".ani_fa h3").css({'color': '#333'});
    });
})

$(document).ready(function (){
    $("#rght").click(function(){
        $(".ani_fa_two").animate({width: '100%'});
      });
    $("#left").click(function(){
        $(".ani_fa_two").animate({width: '300px'});
    });
    $("#rght").click(function(){
        $(".ani_fa_two h3").css({'text-align': 'center'});
        $(".ani_fa_two h3").css({'font-size': '20px'});
        $(".ani_fa_two h3").css({'color': '#333'});
    });
    $("#left").click(function(){
        $(".ani_fa_two h3").css({'color': '#fff'});
    });
})

$(document).ready(function(){
    $("#box_btn").click(function(){
      $(".div1").fadeIn();
      $(".div2").fadeIn("slow");
      $(".div3").fadeIn(3000);
      
    });
});
$(document).ready(function(){
    $("#down").click(function(){
        $(".notice_box").slideDown(3000);
    })
    $("#down").click(function(){
        $(".notice_box p").css('margin-top', '30px');
        $(".notice_box p").css('font-size', '30px');
    })
    $("#stop").click(function(){
        $(".notice_box").stop();
    })
    $("#up").click(function(){
        $(".notice_box").slideUp(3000)
    })
})