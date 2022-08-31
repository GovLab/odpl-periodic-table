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
