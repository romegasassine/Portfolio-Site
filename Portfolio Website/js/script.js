document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {
        padding: 25, 
        dist: -50,
        indicators: true
    };
    var instances = M.Carousel.init(elems, options);
  });