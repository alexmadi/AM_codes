<?php 
    $adminEmail = "oleksandrmad@gmail.com";
    $userEmail = $_POST['fieldEmail'];

    $from = $adminEmail;
    $subject = "Test PHP email";
    $message = $_POST['fieldHTML'];

    $globalHeaders = "MIME-Version: 1.0" . "\r\n";
    $globalHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $headers .= $globalHeaders;
    $headers .= "From: MailSender <mailsender@test.com>";

    mail($userEmail, $subject, $message, $headers);

    $responseSuccess = true;
    $responseMessage = "Success. Mail sent!";
    $response =
            '<span class="f-success alert alert-success js-message">' .
                $responseMessage .
            '</span>';
            
    $responseJSON = array('success' => $responseSuccess, 'response' => $response);

    echo json_encode($responseJSON);
?>