(function() {
  "use strict"; // Start of use strict

  var sidebar = document.querySelector('.sidebar');
  var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');
  console.log('sidebarToggles');
  console.log("joasjdfña", sidebar);
  if (true) {
    
  

    for (var toggle of sidebarToggles) {

      // Toggle the side navigation
        sidebar.classList.toggle('toggled');

        if (sidebar.classList.contains('toggled')) {
          console.log('bsCollapse', bsCollapse);
        };
      
    }

    // Close any open menu accordions when window is resized below 768px
   
  }

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  
  
})(); // End of use strict
