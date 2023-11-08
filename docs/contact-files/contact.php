<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "ashlyncmitm@gmail.com"; 
    $subject = "Contact Form Submission";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);
    header('Location: thankyou.html'); // Redirect to a thank you page
    echo "Valid request";
} else {
    // Handle invalid requests
    echo "Invalid request";
}
?>
