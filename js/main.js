// mostrare / nascondere il menu principale (hamburger-menu)

console.log($('.header-right > a > i'));

$('.header-right > a > i').click(function(){
  $('.hamburger-menu').show();
}
);

$('.hamburger-menu > a > i').click(function(){
  $('.hamburger-menu').hide();
}
);
