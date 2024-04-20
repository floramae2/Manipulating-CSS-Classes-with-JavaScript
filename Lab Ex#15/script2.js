document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperature');
  
    temperatureInput.addEventListener('input', function() {
      const temperature = parseFloat(temperatureInput.value);
      if (!isNaN(temperature)) {
        if (temperature > 30) {
          temperatureInput.classList.remove('cool');
          temperatureInput.classList.add('hot');
        } else {
          temperatureInput.classList.remove('hot');
          temperatureInput.classList.add('cool');
        }
      }
    });
  });
  