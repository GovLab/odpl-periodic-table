$(document).ready(function () {
    // Smooth Scrolling Function
    // $('a[href*=#]:not([href=#])').click(function () {
    //     var $targ = $(this.hash),
    //         host1 = this.hostname,
    //         host2 = location.hostname,
    //         path1 = this.pathname.replace(/^\//, ''),
    //         path2 = location.pathname.replace(/^\//, '');

    //     if (!$targ.length) {
    //         $targ = $('[name=' + this.hash.slice(1) + ']');
    //     }

    //     if ($targ.length && (host1 === host2 || path1 === path2)) {
    //         $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

    //         return false;
    //     }

    //     return true;
    // });


    function createCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }


    var currentScroll = 0;

    function lockscroll(){
      $(window).scrollTop(currentScroll);
  }
    // Modal Click Behavior
    $('.js-open-modal').click(function () {
        var data = $(this).attr('data-open')
        if (data) {
          $(this).parent().find(data).addClass('js-active');
      } else {
          $(this).parent().find('.js-target-modal').addClass('js-active');
      }
      currentScroll=$(window).scrollTop();
      $(window).bind('scroll',lockscroll);
      $('#overlay').addClass('js-active');
      $('body').addClass('js-body-modal-active');
  });

    // Prevent default on footer close
    $('footer .js-close-modal').on('click', function(e) {
      e.preventDefault();
  });


    $('body').on("click", '.js-close-modal', function () {
        currentScroll=$(window).scrollTop();
        $(window).unbind('scroll');
        $('.js-target-modal').removeClass('js-active');
        $('#overlay').removeClass('js-active');
        $('body').removeClass('js-body-modal-active');
    });

    // General Click Behavior for Overlay
    // $('#overlay').click(function () {
    //     $('.js-active').removeClass('js-active');
    //     currentScroll=$(window).scrollTop();
    //     $(window).unbind('scroll');
    //     $('.js-active-menu').removeClass('js-active-menu');
    //     $('body').removeClass('js-body-modal-active');

    // });
    if (readCookie('odimpact-disable-sticky') == null) {
        $('.js-target-sticky').addClass('js-active');
    }

    // Sticky Click Behavior
    $('.js-close-sticky').click(function () {
        $('.js-target-sticky').removeClass('js-active');
        createCookie('odimpact-disable-sticky', true, false);
    });

    // Search Click Behavior
    $('.js-trigger-search').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('js-active');
        $('#overlay').addClass('js-active');
    });

    // Main Menu Click Behavior
    $('.js-trigger-menu').click(function (e) {
        $(this).next().addClass('js-active-menu');
        $('#menu-overlay').addClass('js-active');
    });

    $('#menu-overlay').click(function () {
        $('.js-active').removeClass('js-active');
        $('.js-active-menu').removeClass('js-active-menu');
    });

    // General Click Behavior for Overlay
    // $('#overlay').click(function () {
    //     $('.js-active').removeClass('js-active');
    //     $('.js-active-menu').removeClass('js-active-menu');
    // });

    // Slider
    $('.slider').slick({
        arrows: true,
        draggable: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true
            }
        }
        ]
    });

    // Logic for Accordion Component

    $('.js-open-accordion').click(function() {
        var active = $(this).hasClass('js-active');
        active ? $(this).removeClass('js-active') : $(this).addClass('js-active');
    });

    // Contributors js

    $(document).ready(function() {
      $('#global-btn').css({ "background-color": "#164A7A", "color": "white"})
      $('.open-data-contributors').css({"display": "none"})

      $('#data-btn').click(function() {
        $('#global-btn').css({ "background-color": "rgba(0,0,0,0.1)", "color": "black"})
        $('#data-btn').css({ "background-color": "#164A7A", "color": "white"})
        $('.open-data-contributors').css({"display": "block"})
        $('.global-impact-contributors').css({"display": "none"})
    })

      $('#global-btn').click(function() {
        $('#data-btn').css({ "background-color": "rgba(0,0,0,0.1)", "color": "black"})
        $('#global-btn').css({ "background-color": "#164A7A", "color": "white"})
        $('.global-impact-contributors').css({"display": "block"})
        $('.open-data-contributors').css({"display": "none"})
    })
  })


}); // doc.ready
