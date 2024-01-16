
$(document).ready(function () {

    $('.carousel').carousel({
       interval:3000
        // string:"hover"
        // keyboard:true	
    });

    // Show Color Option Div Whene Click On The Gear
    $('.gear-check').click(function () {

        $('.color-option').fadeToggle();

    });

    // Change Theam Color On Click
    var ColorLi=$('.color-option ul li'),
        scrollButton=$("#scroll-top");

    ColorLi
       .eq(0).css("backgroundColor", "#E41B17").end()
       .eq(1).css("backgroundColor", "#E426D5").end()
       .eq(2).css("backgroundColor", "#FFD500").end()
       .eq(3).css("backgroundColor", "#009AFF");

    ColorLi.click(function () {

        $("link[href*='theam']").attr("href", $(this).attr("data-value"));

        // console.log($(this).attr("data-value"))
    });

    $(window).scroll(function () {
        // $(this).scrollTop()>=700?scrollButton.show() :scrollButton.hide();

        // OR This Code
        
        if( $(this).scrollTop()>=700) {

            scrollButton.show();

        }  else {

            scrollButton.hide();
        }

    });
        // Click Top Button To Scroll The Button
        scrollButton.click(function () {
            $("html,body").animate({scrollTop :0}, 600);
        });


        // Start Scroll

        $("html").niceScroll();

});

// Loading The Screen Of Website

// $(window).load(function () {
   
//          // To Show The Scroll

//         $("body").css("overflow", "auto");

//         $(".loading-overlay .spinner").fadeOut(50,function () {

//             $(this).parent().fadeOut(50, function () {
//                 $(this).remove();
//             });
//         });
// });



 