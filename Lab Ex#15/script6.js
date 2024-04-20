document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.getElementById('myDiv');
  
    myDiv.addEventListener('click', function() {
      myDiv.classList.toggle('red');
      myDiv.classList.toggle('border');
    });
  });
  