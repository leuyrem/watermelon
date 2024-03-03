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
