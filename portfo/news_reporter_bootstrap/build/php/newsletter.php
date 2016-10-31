<?php
if(isset($_POST['submit'])){
    $to = "maxwellbels@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "New submission for Newsletter";
    $headers = "New submission for Newsletter from:" . $from ." by " .$name;
    mail($to,$subject,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>
