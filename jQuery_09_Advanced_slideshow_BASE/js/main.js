$(function () {
  let container = $('.slideshow'),
    slideGroup = container.find('.slideshow_slides'),
    slides = slideGroup.find('a'),
    nav = container.find('.slideshow_nav'),
    indicator = container.find('.indicator'),
    slideCount = slides.length,
    indicatorHtml = '',
    currentIndex = 0,
    duration = 500,
    easing = 'easeInOutExpo',
    interval = 3500,
    timer;

  // 슬라이드를 가로로 배열
  // slide마다 할일, 0%, 100% 200% 300% 400%
  // console.log(slides);
  slides.each(function (i) {
    var newLeft = i * 100 + '%';
    $(this).css({ left: newLeft });
    // var i =2; i= i+2; i +=2

    indicatorHtml += '<a href="">' + (i + 1) + '</a>';
    // console.log(indicatorHtml);
  }); //each 끝
  indicator.html(indicatorHtml);
  // A.text(B); A요소의 b의 내용을 글씨 형태로 추가
  // A.html(B); A요소의 b의 내용을 html 형태로 추가

  // 슬라이드 이동 함수
  function goToslide(index) {
    //i=0 left=0%, i=1 left:-100%, i=2 left:-200%
    slideGroup.animate({ left: -100 * index + '%' }, duration.easing);
    currentIndex = index;
    console.log(currentIndex);

    updateNav(); //처음인지 마지막인지 검사해주는 함수
  }

  function updateNav() {
    var navPrev = nav.find('.prev');
    var navNext = nav.find('.next');
    // 처음 currentIndex 0, prev 버튼 안보이도록
    if (currentIndex == 0) {
      navPrev.addClass('disabled');
    } else {
      navPrev.removeClass('disabled');
    }

    if (currentIndex == slideCount - 1) {
      navNext.addClass('disabled');
    } else {
      navNext.removeClass('disabled');
    }

    // 마지막 currentIndex 3, next 버튼 안보이도록
  }

  //인디케이터로 이동하기
  indicator.find('a').click(function (e) {
    e.preventDefault();
    var idx = $(this).index();
    // console.log(idx);
    goToslide(idx);
  });

  nav.find('a').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('prev')) {
      goToslide(currentIndex - 1);
    } else {
      goToslide(currentIndex + 1);
    }
  });

  updateNav();

  // nav.find('.prev').click(function (e) {
  //   e.preventDefault();
  //   var i = currentIndex - 1;
  //   goToslide(i);
  // });

  // nav.find('.next').click(function (e) {
  //   e.preventDefault();
  //   var i = currentIndex + 1;
  //   goToslide(i);
  // });

  //좌우 버튼으로 이동하기
  //다음버튼 클릭 currentIndex+1 -> goToslide(?)
  //이전          c -1 -> goToslide(?)
});
