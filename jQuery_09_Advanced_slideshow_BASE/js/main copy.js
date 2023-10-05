$(function () {
  let container = $('.slideshow'),
    slideGroup = container.find('.slideshow_slides'),
    slides = slideGroup.find('a'),
    indicator = container.find('.indicator'),
    indicatorHtml = '';

  slides.each(function (i) {
    let newLeft = i * 100;
    $(this).css({ left: newLeft + '%' });

    indicatorHtml += '<a href ="">' + (i + 1) + '</a>';
  });
  indicator.html(indicatorHtml);
});
