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
    {
      selector: ".navbar-fixed",
      offset: 1500,
      callback: function() {
        $("nav").removeClass("white");
        $("nav").addClass("teal white-text");
        $("a").removeClass("grey-text darken-2");
      }
    },
    {
      selector: ".about",
      offset: 400,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: ".donatur",
      offset: 500,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: ".community",
      offset: 550,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    }
  ];

  Materialize.scrollFire(options);
});
