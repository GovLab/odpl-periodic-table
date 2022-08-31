// $(function() {
  var $grid = $('.grid').isotope({
    itemSelector: '.e-card',
        // masonry: {
        //     columnWidth: 300,
        //     isFitWidth: true,
        //     gutter: 10
        // }
        layoutMode: 'fitRows'
      }).addClass('claudio');

  $('#government-button').click(function(event) {
    event.preventDefault();
    TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#government-filter').addClass('selected');
    $grid.isotope({ filter : '.impact-government' });
  });

  $('#citizens-button').click(function(event) {
    event.preventDefault();
    TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#citizens-filter').addClass('selected');
    $grid.isotope({ filter : '.impact-citizens' });
  });

  $('#economic-button').click(function(event) {
    event.preventDefault();
    TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#economic-filter').addClass('selected');
    $grid.isotope({ filter : '.impact-economic' });
  });

  $('#public-button').click(function(event) {
    event.preventDefault();
    TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#public-filter').addClass('selected');
    $grid.isotope({ filter : '.impact-public' });
  });


  $('#see-all-btn').addClass('selected');
  $('#all-collections').addClass('selected');

  $('.js-tween').click(function(e) {
    TweenLite.to(window, 0.5, {scrollTo:$('#a-explore').offset().top, ease:Power2.easeOut});
  });

    // $('.js-tab-override').click(function(e) {
    //     var w = window.location.href;
    //     window.location.href = w.replace(/^http(s)?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*?(:[0-9]+)?(\/)?/i, '') + '/explore.html';
    // });

    var currentCollection = "*";
    var currentFilter = "*";

    function filterBy(param) {
      currentFilter = param;
      filterByTwo(currentCollection, param);
    }

    function filterByTwo(param1, param2) {
      if (!(/[*.~+>#=:()\[\]\s]/g.test(param1))) {
        param1 = '.' + param1;
      }
      if (!(/[*.~+>#=:()\[\]\s]/g.test(param2))) {
        param2 = '.' + param2;
      }

      if (param1 === "*" && param2 === "*") {
        filterParam = "*";
      } else if (param1 === "*") {
        filterParam = param2;
      } else if (param2 === "*") {
        filterParam = param1;
      } else {
        filterParam = param1 + param2;
      }

      console.log(param1, param2, filterParam);

      $grid.isotope({ filter : filterParam });

      if ($grid.data('isotope').filteredItems.length === 0) {
        $('#no-results').removeClass('m-hidden');
      } else {
        $('#no-results').addClass('m-hidden');
      }
    }

    $('.js-filter').click(function(event){
      event.preventDefault();

      $('#impact-select').val('*');
      $('#sector-select').val('*');

      $('.js-filter').removeClass('selected');
      d3.selectAll('.region').classed('selected', false);
      $(this).addClass('selected');

      currentFilter = $(this).attr('data-filter');
      filterByTwo(currentCollection, currentFilter);

    });


    $('.js-filter-select').change(function(event){
      event.preventDefault();
      var id = $(this).attr('id');

      if (id === "sector-select") {
        $('#impact-select').val('*');
      } else if (id === "impact-select") {
        $('#sector-select').val('*');
      }
      $('.js-filter').removeClass('selected');
      d3.selectAll('.region').classed('selected', false);

      currentFilter = $(this).val();
      filterByTwo(currentCollection, currentFilter);

    });

    $('.js-filter-and').click(function(event){
      event.preventDefault();

      $('.js-filter-and').removeClass('selected');
      $(this).addClass('selected');

      currentCollection = $(this).attr('data-filter');

      filterByTwo(currentCollection, currentFilter);

    });

// });