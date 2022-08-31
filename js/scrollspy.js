$(document).ready(function() {
  var leftPosition = $('.e-scrollspy').position().left;

  animateScroll();
  stickyNav();
  scrollSpy();
  
  // BIND CLICK TO NAVIGATION AND ANIMATE SCROLLING
  function animateScroll() {
    // LOCATE THE NAV MENU
    var scrollMenu = $(".e-scrollspy");
    // GRAB ALL LINKS
    var scrollMenuItems = scrollMenu.find("a");
    scrollMenuItems.on("click", function(e) {
      e.preventDefault();
      var link = $(this).attr("href");
      var linkOffset = $(link).offset().top - $(".top-nav").height();
      $('html, body').stop().animate({
        'scrollTop': linkOffset
      }, 400);
    })
  }
  // STICKY NAVIGATION
  function stickyNav() {
    $(window).scroll(function() {
      // SCROLL LOCATION
      var yPosition = $(window).scrollTop();
      var min = $('#a-scrollspy').offset().top - $('.top-nav').height();
      var max = $('#a-stop').offset().top - $('#scrollspy').height() - 150;
      if (yPosition > min && yPosition < max) {
        $('.e-scrollspy').addClass('m-active');
        $('.e-scrollspy').removeClass('m-absolute');
        $('.e-scrollspy').css('top', $('.top-nav').height());
      } else if (yPosition > max) {
        $('.e-scrollspy').removeClass('m-active');
        $('.e-scrollspy').addClass('m-absolute');
        $('.e-scrollspy').css('top', max + $('.top-nav').height());
      } else {
        $('.e-scrollspy').removeClass('m-active');
        $('.e-scrollspy').removeClass('m-absolute');
        $('.e-scrollspy').css('top', 0);
      }
    });
  }
  // SCROLL SPY
  function scrollSpy() {
    $(window).scroll(function() {
      // GRAB SCROLL MENU
      var scrollMenu = $(".e-scrollspy");
      // GRAB ALL LINKS WITHIN SCROLL MENU
      var scrollMenuItems = scrollMenu.find("a");
      var scrollItems = [];
      scrollMenuItems.map(function(x) {
        // IF THERE IS AN HREF PUSH IT TO SCROLL ITEMS ARRAY
        var item = $($(this).attr("href"));
        scrollItems.push(item);
        if (item.length) {
          return item;
        }
      });
      var currentScrollPosition = $(this).scrollTop();
      for (var i = 0; i < scrollItems.length; i++) {
        var currentEl = $("#" + scrollItems[i].attr("id"));
        var currentElHeight = currentEl.height() - 10;
        if (currentEl.offset().top >= (currentScrollPosition - currentElHeight)) {
          scrollMenuItems.map(function() {
            if (this.hash === currentEl.selector) {
              scrollMenuItems.map(function() {
                  $(this).parent("li").removeClass("active")
                })
                // ADD ACTIVE CLASS TO ACTIVE LIST ITEM
              $(this).parent("li").addClass("active");
            }
          });
          return (currentEl);
        }
      }
    });
  }
});