
function sharePageUrl() {
    // Get the current page URL
    var currentPageUrl = encodeURIComponent(window.location.href);
  
    // Open WhatsApp with the current page URL
    window.location.href = "whatsapp://send?text=" + currentPageUrl;
  }


  window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            var header = document.getElementById("hidden-header");

            // Check screen width before applying scroll behavior
            if (window.innerWidth < 400) {
                // Add the 'active' class when the scroll position is 100px or more
                if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
                    header.classList.add("active");
                } else {
                    header.classList.remove("active");
                }
            }
        }