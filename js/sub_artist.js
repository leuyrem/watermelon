// 서브메뉴 색상변경
$(window).scroll(function(){
    var height = $(this).scrollTop();
    if(height > 700 &&  height<=2600) {
        $('.topbar li a:hover').css("color","#7afafa");
        $('#home .topbar li a').css("color","#000");
    }else if(height <600 || height >2600){
        $('.topbar li a:hover').css("color","#7afafa");
        $('#home .topbar li a').css("color","#fff");
  
    }
});



// $(window).scroll(function(){ 
//     var height = $(document).scrollTop(); 
//     if(height > 850){ 
//         $(".surch").attr("src", "./img/icon_black.png");
//         $(".logoimg").attr("src", "./img/logo_black.png");
//         $(".login").css("color","#000")
//         $(".line").css("backgroundColor","#000")
//     }else if(height < 850){ 
//         $(".surch").attr("src", "./img/surch.png");
//         $(".logoimg").attr("src", "./img/logo1.png");
//         $(".login").css("color","#fff")
//         $(".line").css("backgroundColor","#fff")
//     } 
//   });



// 앨범 슬라이드
// $('.prev').click(function(){
//     $('.slide li:last').prependTo('.slide');
//     $('.slide').css('margin-left',-1000);
//     $('.slide').stop().animate({marginLeft:0},800);

//  });


//  $('.next').click(function(){
//    $('.slide').stop().animate({marginLeft:-1000},800, function(){
//       $('.slide li:first').appendTo('.slide');
//       $('.slide').css({marginLeft:0});
//    });
//  });


