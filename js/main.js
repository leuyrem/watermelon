//메인 슬라이드
function prev(){
    $('.main__bg li:last').prependTo('.main__bg');
    $('.main__bg').css('margin-left',-1000);       // $('.slide').css({marginLeft:-1000}); 
    $('.main__bg').stop().animate({marginLeft:0},800);
 }

 function next(){
    $('.main__bg').stop().animate({marginLeft:-1000},800, function(){
       $('.main__bg li:first').appendTo('.main__bg');
       $('.main__bg').css({marginLeft:0});
    });
 }

 setInterval(next, 8000);  
 
          $('.prev').click(function(){
             prev();
          });
 
          $('.next').click(function(){
             next();
          });

//앨범 슬라이드
$(function(){
   var page = 0;

   $('.prev').click(function () {
       page--;
       if (page < 0) {
           page = 0;
           alert('첫번째 이미지');
           return;
       }
       $('.slide').stop().animate({ marginLeft: -336 * page }, 800);
   });


   $('.next').click(function () {
       page++;
       if (page > $('.slide li').length-3) {
           page = $('.slide li').length-3;
           alert('마지막 이미지');
           return;
       }
       $('.slide').stop().animate({ marginLeft: -336 * page }, 800);
   });
});


// <!-- prependTo() 마지막자식으로 넣어라 -->
// $(function(){
//     $(".s_box li:last").prependTo(".s_box");
//     // $(".s_box").animate({marginLeft:"-=1200px"},1000, function(){
//     // });
//     $(".btn_next").click(function(){
//         $(".s_box").animate({marginLeft:"-=1200px"},1000,function(){
//             $(".s_box li:first").appendTo(".s_box");
//             $(".s_box").stop().css("margin-left","-1200px");


//         });

//     });

//     $(".btn_prev").click(function(){
//         $(".s_box").animate({marginLeft:"+=1200px"},2000,function(){
//             $(".s_box li:last").prependTo(".s_box");
//             $(".s_box").stop().css("margin-left","-1200px");


//         });


//     });

//     //강제 반복실행
//     setInterval(function(){
//         $(".btn_next").trigger("click");
//     },3000);






// });