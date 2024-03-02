$(document).ready(function () {
    $("#hamburger").click(function () {
        $(this).toggleClass("is-active");

        if ($('#menu_wrap').hasClass('full_n')) {
            $('#menu_wrap>ul').hide();
        } else {
            $('#menu_wrap>ul').fadeIn(1000);
        }

        $('#menu_wrap').toggleClass('full_n');
    });
});


// 헤더 색상변경
// $(window).scroll(function () {
//     var height = $(this).scrollTop();
//     if (height > 300 && height < 1200) {
//         $('.logo').attr("src", "img/logo(black_03).png");
//         $('#hamburger .line').css("bakground-color", "#000");
//     }


// });



$(window).scroll(function () {
    var height = $(this).scrollTop();
    if (height < 600 || height > 8500) {
        $('#hamburger').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#fff")
        });
        $('#hamburger').css("color", "#fff");

        

    } else if (height > 300 && height < 2000) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#000")
        });
        $('.topbar li a').css("color", "#000");




    } else if (height > 2200 && height < 3000) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#fff")
        }); 
        $('.topbar li a').css("color", "#fff");





    } else if (height > 2000 && height < 6300) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#000")
        });        
        $('.topbar li a').css("color", "#000");

   

    } else if (height > 6300) {
        $('.topbar li a').hover(function(){
            $(this).css("color", "#7afafa")
        },function(){
            $(this).css("color", "#fff")
        });         
        $('.topbar li a').css("color", "#fff");


    }
});
