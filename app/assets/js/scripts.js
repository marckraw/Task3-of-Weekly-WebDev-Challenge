/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $(".site-header__menuIcon-mobile").click(function() {
      $(".site-header__nav--mobile").toggleClass("site-header__nav--mobile-on");
    });
  })

})(jQuery, window, document);