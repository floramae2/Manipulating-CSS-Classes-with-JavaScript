document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const myText = document.getElementById('myText');
  
    toggleCheckbox.addEventListener('change', function() {
      if (!toggleCheckbox.checked) {
        myText.classList.remove('strike');
      }
    });
  });
  