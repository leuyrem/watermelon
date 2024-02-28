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
