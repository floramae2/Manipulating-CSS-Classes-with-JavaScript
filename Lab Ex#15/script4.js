document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
  
    toggleButton.addEventListener('click', function() {
      toggleButton.classList.toggle('toggle');
    });
  });
  