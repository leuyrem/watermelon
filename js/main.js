//메인 슬라이드
console.clear();

// 상단 메인 배너 슬라이더
$('.main__page__btns').click(function () {
    var $clicked = $(this);
    var $slider = $(this).closest('.main__wrap');

    var index = $(this).index();
    var isLeft = index == 0;
    //console.log(index);

    var $current = $slider.find('.main__bg__slides > .bn.active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    //console.log($post.length);

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find('.main__bg__slides > .bn:last-child');
        }
        else {
            $post = $slider.find('.main__bg__slides > .bn:first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');

    updateCurrentPageNumber();
});

setInterval(function () {
    $('.next__btn').click();
}, 8000);

// 슬라이더 페이지 번호 지정
function pageNumber__Init() {
    // 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
    var totalSlideNo = $('.main__bg__slides > .bn').length;
    //console.log(totalSlideNo);

    $('.main__slide > .main__wrap').attr('data-slide-total', totalSlideNo);

    // 각 배너 페이지 번호 매기기
    $('main__slide > .main__wrap > .main__bg__slides > .bn').each(function (index, node) {
        $(node).attr('data__slide__no', index + 1);
    });
};

pageNumber__Init();

// 슬라이더 이동시 페이지 번호 변경
function updateCurrentPageNumber() {
    var totalSlideNo = $('.main__slide > .main__wrap').attr('data-slide-total');
    var currentSlideNo = $('.main__bg__slides > .bn.active').attr('data__slide__no');

    $(' .total__slide__no').html(totalSlideNo);
    $(' .current__slide__no').html(currentSlideNo);
};

updateCurrentPageNumber()






//앨범 슬라이드
let slides = document.querySelector(".album__cover"),
slide = document.querySelectorAll(".album__cover li"),
currentIdx = 0,
slideCount = slide.length,
slideWidth = 300,
slideMargin = 30,
prevBtn = document.querySelector(".cover__prev"),
nextBtn = document.querySelector(".cover__next");

makeClone();

function makeClone() {
for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
}
//index 번호 4번은 슬라이드 05임
//  slideCount -1 초기값
for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    // 원래 있던 내용 앞에 추가해야함(요소의 앞)
    slides.prepend(cloneSlide);
}

updateWidth();
setinit();
setTimeout(function () {
    slides.classList.add("animated");
}, 100);
}

// 전체 너비를 구해서 ul의 너비를 지정하는 함수
function updateWidth() {
let currentSlides = document.querySelectorAll(".album__cover li");
let newSlideCount = currentSlides.length;

let newWidth =
    (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
slides.style.width = newWidth;
}

//초기 위치 잡는 함수
function setinit() {
// 왼쪽으로 움직일거니까 ( - )붙임
// 이동할 변수
let TranslateValue = -(slideWidth + slideMargin) * slideCount;
slides.style.transform = "translateX(" + TranslateValue + "px)";
}

nextBtn.addEventListener("click", function () {
// 지금 보고있는 슬라이드 수 +1 로 이동
moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function () {
// 지금 보고있는 슬라이드 수 +1 로 이동
moveSlide(currentIdx - 1);
});

// 숫자가 넘어와야 함수가 작동 하도럭
// next 누를수록 왼쪽으로 translate left 값이 거리만큼 이동해야함
// 전체가 슬라이드 너비+여백 만큼 이동해야지?
function moveSlide(num) {
// 원래는 0이었는데 사용자가 이동하면 index가 1로 바뀌어있어야 함
slides.style.left = -num * (slideWidth + slideMargin) + "px";
//이동한 다음에는 currentIdx를 반드시 슬라이드가 최종적으로 보고있는 num 숫자만큼 바껴있어야 함.
currentIdx = num;
console.log(currentIdx, slideCount);
// 마지막이면 1번으로 다시 돌리기

if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
        slides.classList.remove("animated");
        slides.style.left = "0px";
        currentIdx = 0;
    }, 500);

    setTimeout(function () {
        slides.classList.add("animated");
    }, 600);
}
}

// 앨범 슬라이드 애니메이션
$(window).scroll(function () {
    var ws = $(this).scrollTop();

    var galleryboard = $('.album__box1').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box1').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box2').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box2').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box3').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box3').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box4').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box4').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box5').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box5').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box6').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box6').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box7').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box7').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box8').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box8').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box9').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box9').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var galleryboard = $('.album__box10').offset().top;
    if (ws > galleryboard - 800) {
        $('.album__box10').css("transform", "translateY(0px)").css("opacity", "1");
    }

});






// 앨범 슬라이드 호버
$(function () {
    $('.album__box1').mouseover(function () {
        $('.album__box1 img').css('border-radius','50%')
    });
    $('.album__box1').mouseout(function () {
        $('.album__box1 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box2').mouseover(function () {
        $('.album__box2 img').css('border-radius','50%')
    });
    $('.album__box2').mouseout(function () {
        $('.album__box2 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box3').mouseover(function () {
        $('.album__box3 img').css('border-radius','50%')
    });
    $('.album__box3').mouseout(function () {
        $('.album__box3 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box4').mouseover(function () {
        $('.album__box4 img').css('border-radius','50%')
    });
    $('.album__box4').mouseout(function () {
        $('.album__box4 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box5').mouseover(function () {
        $('.album__box5 img').css('border-radius','50%')
    });
    $('.album__box5').mouseout(function () {
        $('.album__box5 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box6').mouseover(function () {
        $('.album__box6 img').css('border-radius','50%')
    });
    $('.album__box6').mouseout(function () {
        $('.album__box6 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box7').mouseover(function () {
        $('.album__box7 img').css('border-radius','50%')
    });
    $('.album__box7').mouseout(function () {
        $('.album__box7 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box8').mouseover(function () {
        $('.album__box8 img').css('border-radius','50%')
    });
    $('.album__box8').mouseout(function () {
        $('.album__box8 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box9').mouseover(function () {
        $('.album__box9 img').css('border-radius','50%')
    });
    $('.album__box9').mouseout(function () {
        $('.album__box9 img').css('border-radius','0px')
    });
});

$(function () {
    $('.album__box10').mouseover(function () {
        $('.album__box10 img').css('border-radius','50%')
    });
    $('.album__box10').mouseout(function () {
        $('.album__box10 img').css('border-radius','0px')
    });
});