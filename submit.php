<?php
// Retrieve the form data from the AJAX request
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare the data to be sent to the Airtable API
$data = array(
  'fields' => array(
    'Name' => $name,
    'Email' => $email,
    'Message' => $message
  )
);

// Convert the data to JSON
$jsonData = json_encode($data);

// Set up the cURL request to the Airtable API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.airtable.com/v0/appvjU455Si4NmOvp/Contact%20Form%20Entries');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Content-Type: application/json',
  'Authorization: Bearer patDUTTQKz5M7Dvnw.e41fdf3c988623b4706c2bf28e98e0d6172d8cd825030cdae9866d68b7584553'
));

// Execute the cURL request
$response = curl_exec($ch);

// Check for any errors
if (curl_errno($ch)) {
  $error = 'Failed to send message. Please try again later.';
} else {
  $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  if ($httpCode === 200) {
    $error = '';
  } else {
    $error = 'Failed to send message. Please try again later.';
  }
}

// Close the cURL session
curl_close($ch);

// Send the appropriate response back to the JavaScript code
if ($error === '') {
  echo json_encode(array('success' => true));
} else {
  echo json_encode(array('success' => false, 'error' => $error));
}
?>
