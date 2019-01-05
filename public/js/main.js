import $ from 'jquery';
$(document).ready(function() {
  // Init Sidenav
  $(".button-collapse").sideNav();
  $(".modal").modal();
  // Init Scrollspy
  $(".scrollspy").scrollSpy();
  // COUNT
  $(".count").each(function() {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 1000,
          easing: "swing",
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        }
      );
  });
  // CAROUSEL
  $(".carousel").carousel();
  // ScrollFire
  const options = [
    {
      selector: ".main-text",
      offset: 0,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
  ];

  Materialize.scrollFire(options);
});
