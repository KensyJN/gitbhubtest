document.getElementById('changeColorBtn').addEventListener('click', function() {
  // Generate a random color
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  // Apply the random color as the background color of the body
  document.body.style.backgroundColor = randomColor;
});
