(function() {
  "use strict"; // Start of use strict

  var sidebar = document.querySelector('#app').childNodes.item(1).childNodes.item(0).childNodes.item(0).childNodes.item(0);
  var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');
  console.log('sidebarToggles', sidebarToggles);
  console.log("joasjdfña", sidebar);
  console.log("joasjdffdgsfdgña", document.querySelector('#app'));
  if (sidebar) {
    
    
    for (var toggle of sidebarToggles) {

      // Toggle the side navigation
      toggle.addEventListener('click', function(e) {
        sidebar.classList.toggle('toggled');

       
      });
    }

    // Close any open menu accordions when window is resized below 768px
    window.addEventListener('resize', function() {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

      if (vw < 768) {
        for (var bsCollapse of sidebarCollapseList) {
          bsCollapse.hide();
        }
      };
      
    });
  }

 
})(); // End of use strict
