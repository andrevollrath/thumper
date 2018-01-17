// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require semantic-ui
//= require turbolinks



$(document).ready(function() {
  $('#thump_box').on('click', function (e) {

    if ($(this).hasClass('active')){
      var num = Math.floor(Math.random() * (75 - 40 + 1)) + 40;;

      $(this).removeClass('active');
      $(this).html('Thumping it <span id="count">0</span> / ' + num);  

      for(i=0; i<num; i++){
        $.ajax({ url: '/thumpit',
          error: function error() {
            return console.warn('THUMP :: Ajax Error');
          }
        });
      }
    }
  });

});