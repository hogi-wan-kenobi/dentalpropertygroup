//$(document).ready(function() {
//  $('#contact-form').submit(function(event) {
//    event.preventDefault(); // Prevent form submission
//
//    var form = $(this);
//    var apiKey = 'patDUTTQKz5M7Dvnw.e41fdf3c988623b4706c2bf28e98e0d6172d8cd825030cdae9866d68b7584553'; // Replace with your Airtable API key
//    var baseId = 'appvjU455Si4NmOvp'; // Replace with your Airtable base ID
//    var tableName = 'Contact%20Form%20Entries'; // Replace with your Airtable table name
//    var url = 'https://api.airtable.com/v0/' + baseId + '/' + tableName + '?api_key=' + apiKey;
//    var formData = form.serialize();
//
//    $.ajax({
//      type: 'POST',
//      url: url,
//      dataType: 'json',
//      data: formData,
//      success: function(response) {
//        form[0].reset();
//        alert('Message sent successfully!');
//      },
//      error: function(xhr, status, error) {
//        alert('Failed to send message. Please try again later.');
//      }
//    });
//  });
//});

//USE PHP TO HANDLE AIRTABLE API

//$(document).ready(function() {
//  $('#contact-form').submit(function(event) {
//    event.preventDefault(); // Prevent form submission
//
//    var form = $(this);
//    var formData = form.serialize();
//
//    $.ajax({
//      type: 'POST',
//      url: 'submit.php', // Path to your PHP script
//      data: formData,
//      success: function(response) {
//        form[0].reset();
//        alert('Message sent successfully!');
//      },
//      error: function(xhr, status, error) {
//        alert('Failed to send message. Please try again later.');
//      }
//    });
//  });
//});

var expandButtons = document.querySelectorAll('.expand-btn');
var overlays = document.querySelectorAll('.popup');
var closeButtons = document.querySelectorAll('.close-btn');

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
