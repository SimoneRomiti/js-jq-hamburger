// mostrare / nascondere il menu principale (hamburger-menu)

console.log($('.header-right > a > i'));

$('.header-right > a > i').click(function(){
  $('.hamburger-menu').fadeIn('slow');
}
);

$('.hamburger-menu > a > i').click(function(){
  $('.hamburger-menu').fadeOut('slow');
}
);
