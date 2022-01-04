$(document).ready(function () {
  // toggle clue
  $(".clueToggle").click(function () {
    $(".Clue").toggle("slow");
  });

  //lightslider
  $("#lightSlider").lightSlider({
    item: 3,
    autoWidth: false,
    slideMargin: 0,
    loop: true,
    speed: 500,
    auto: true,
    vertical: false,
    enableTouch: true,
    enableDrag: true,
    pager: false,
  });
});
