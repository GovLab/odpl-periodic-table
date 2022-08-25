$(document).ready(function(){
  //////////////////////////////////////////////////////////////////////////////
  // This is a simplified function to make the element modals work.
  // Ideally we would have an overlay system, hiding the description box when clicking outside of it.

  $("body").on('click','.js-click', function() {
    $('.js-active').removeClass('js-active');
    $(this).parent().addClass('js-active');
  });

  $("body").on('click','.js-unclick', function() {
    $(this).parent().removeClass('js-active');
    $('.js-active').removeClass('js-active');
  });

  $('.js-toggle').click(function () {
    // $('.js-toggle').not(this).removeClass('js-expand');
    $(this).toggleClass('js-expand');
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });

  $('#periodic-table-page').on("click", function() {
    $('.js-active').removeClass('js-active');
  })

});
