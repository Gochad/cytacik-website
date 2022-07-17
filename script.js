$(document).on("scroll", function() {
    var pixels = $(document).scrollTop()
    if(pixels > 50) {
      $("header").addClass("hidden")
    } else {
      $("header").removeClass("hidden")
    }
    var docHeight = $(document).height()
    var winHeight = $(window).height()
    var diff = docHeight - winHeight
    var percent = 100 * pixels / diff
    $(".bar").css("width", percent + "%")
})
  
  
  
  