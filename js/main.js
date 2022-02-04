if ($("#slider").length) {
  $(".slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    dots: true,
  });

  $(".slider").slick("slickGoTo", 1);
}
