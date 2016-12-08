(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $(".site-header__menuIcon-mobile").click(function() {
      $(".site-header__nav--mobile").toggleClass("site-header__nav--mobile-on");
    });
  })

})(jQuery, window, document);