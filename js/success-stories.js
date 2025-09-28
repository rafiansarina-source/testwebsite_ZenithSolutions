$(document).ready(function(){
  // Initialize Owl Carousel
  var owl = $(".success-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true, // Arrows for manual sliding
    dots: true, // Pagination dots
    autoplay: true,
    autoplayTimeout: 6000, // Slower for readability
    autoplayHoverPause: true, // Pause on hover, Tata-like
    smartSpeed: 800, // Smooth transition speed
    responsive: {
      0: { 
        items: 1,
        nav: false // Hide arrows on mobile
      },
      768: { 
        items: 2 
      },
      1024: { 
        items: 3 
      }
    }
  });

  // Refresh after images load to fix sizing/sliding issues
  $(window).on('load', function() {
    owl.trigger('refresh.owl.carousel');
  });

  // Optional: Log errors
  console.log("Owl Carousel initialized on .success-carousel");
});