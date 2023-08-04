var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-1", {
  effect: "cards",
  grabCursor: true,
});
$('.suportBut').click(function(){
  $('.payBox').css('display','flex');
});
$('.payExit').click(function(){
  $('.payBox').css('display','none');
});
$('.cardBut').click(function(){
  $('.payCardBox').css('display','flex');
  $('.payBox').css('display','none');
});
$('.payCardExit').click(function(){
  $('.payCardBox').css('display','none');
});

$('.CardDogBut').click(function(){
  $('.payCardBox').css('display','none');
});

var swiper2 = new Swiper('.swiper-container', {
  spaceBetween: 30,
  slidesPerView: 3,
  speed: 2500,
  centeredSlides: true,
  autoplay: 1000,
  autoplayDisableOnInteraction: false,
  loop: true
});
var swiperOptions = {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 7,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false
};

var swiper2 = new Swiper(".swiper-container", swiperOptions);



var userText;
var $textDiv = $('.cardImgNumberBox');
var $input = $('.CardNumInp');

$('input').on('input', function() {
    userText = $input.val();
    $textDiv.html(userText);
});