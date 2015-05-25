var app = {
  initialize: function () {
    this.footer()
    this.postDropDown()
  }

, footer: function () {
    var $backToBottom = $('.posts__drop-down__back-to-top')
    $backToBottom.click(function(event) {
      event.preventDefault()
      $('html, body').animate( {scrollTop:(0)}, 'slow')
    })
  }

, postDropDown: function() {
    var $dropDown = $('.posts__drop-down')
      , $header = $('.page-header')

    $(window).on('scroll', function(event) {
      var headerHeight = $header.height() + 100
        , $this = $(this)
        , position = $this.scrollTop()

      if (position > headerHeight) {
        $dropDown.addClass('posts__drop-down--active')
      } else {
        $dropDown.removeClass('posts__drop-down--active')
      }
    })
  }
}

app.initialize()