// Smooth scroll to top
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    scrollToTop(600); // Adjust the duration as needed (in milliseconds)
  });
  
  // Function to smoothly scroll to top
  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
  }
  