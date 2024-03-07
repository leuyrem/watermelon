// 메인 슬라이드
console.clear();

$('.main__page__btn').click(function () {
    var $clicked = $(this);
    var $main__slider = $(this).closest('.main__slider');

    var index = $(this).index();
    var isLeft = index == 0;

    var $current = $main__slider.find(' > .main__slides > .main__bn.active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (isLeft) {
            $post = $main__slider.find(' > .main__slides > .main__bn:last-child');
        }
        else {
            $post = $main__slider.find(' > .main__slides > .main__bn:first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');

    updateCurrentPageNumber();
});

setInterval(function () {
    $('.next-btn').click();
}, 8000);

// 페이지 번호 지정
function pageNumber__Init() {
    var totalSlideNo = $('.main__slides > .main__bn').length;
    $(' .main__slider').attr('data-slide-total', totalSlideNo);

    // 각 배너 페이지 번호 매기기
    $('.main__slides > .main__bn').each(function (index, node) {
        $(node).attr('data-slide-no', index + 1);
    });
};

pageNumber__Init();



// 슬라이드 이동시 페이지 번호 변경
function updateCurrentPageNumber() {
    var totalSlideNo = $('.main__slider').attr('data-slide-total');
    var currentSlideNo = $(' .main__slides > .main__bn.active').attr('data-slide-no');

    $('.main__page__no > .total__slide__no').html(totalSlideNo);
    $('.main__page__no > .current__slide__no').html(currentSlideNo);
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

    for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
    }

    updateWidth();
    setinit();
    setTimeout(function () {
        slides.classList.add("animated");
    }, 100);
}

function updateWidth() {
    let currentSlides = document.querySelectorAll(".album__cover li");
    let newSlideCount = currentSlides.length;

    let newWidth =
        (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
    slides.style.width = newWidth;
}

//초기 위치 잡는 함수
function setinit() {
    let TranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = "translateX(" + TranslateValue + "px)";
}

nextBtn.addEventListener("click", function () {
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function () {
    moveSlide(currentIdx - 1);
});


function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + "px";
    currentIdx = num;
    console.log(currentIdx, slideCount);


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
        $('.album__box1 img').css('border-radius', '50%')
    });
    $('.album__box1').mouseout(function () {
        $('.album__box1 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box2').mouseover(function () {
        $('.album__box2 img').css('border-radius', '50%')
    });
    $('.album__box2').mouseout(function () {
        $('.album__box2 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box3').mouseover(function () {
        $('.album__box3 img').css('border-radius', '50%')
    });
    $('.album__box3').mouseout(function () {
        $('.album__box3 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box4').mouseover(function () {
        $('.album__box4 img').css('border-radius', '50%')
    });
    $('.album__box4').mouseout(function () {
        $('.album__box4 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box5').mouseover(function () {
        $('.album__box5 img').css('border-radius', '50%')
    });
    $('.album__box5').mouseout(function () {
        $('.album__box5 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box6').mouseover(function () {
        $('.album__box6 img').css('border-radius', '50%')
    });
    $('.album__box6').mouseout(function () {
        $('.album__box6 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box7').mouseover(function () {
        $('.album__box7 img').css('border-radius', '50%')
    });
    $('.album__box7').mouseout(function () {
        $('.album__box7 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box8').mouseover(function () {
        $('.album__box8 img').css('border-radius', '50%')
    });
    $('.album__box8').mouseout(function () {
        $('.album__box8 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box9').mouseover(function () {
        $('.album__box9 img').css('border-radius', '50%')
    });
    $('.album__box9').mouseout(function () {
        $('.album__box9 img').css('border-radius', '0px')
    });
});

$(function () {
    $('.album__box10').mouseover(function () {
        $('.album__box10 img').css('border-radius', '50%')
    });
    $('.album__box10').mouseout(function () {
        $('.album__box10 img').css('border-radius', '0px')
    });
});