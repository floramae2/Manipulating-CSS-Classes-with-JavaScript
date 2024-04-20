document.addEventListener("DOMContentLoaded", function() {
  const myImage = document.getElementById('myImage');

  myImage.addEventListener('mouseenter', function() {
    myImage.classList.add('highlight');
  });

  myImage.addEventListener('mouseleave', function() {
    myImage.classList.remove('highlight');
  });
});
