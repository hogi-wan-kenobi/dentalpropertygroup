var expandButtons = document.querySelectorAll('.expand-btn');
var overlays = document.querySelectorAll('.popup');
var closeButtons = document.querySelectorAll('.close-btn');
var menuButtons = document.querySelectorAll('.menu-btn');

expandButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var popupId = button.getAttribute('data-popup');
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById(popupId);
    overlay.style.display = 'block';
    popup.style.display = 'block';
  });
});

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var popup = button.parentNode;
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });
});

menuButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup1');
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });
});

