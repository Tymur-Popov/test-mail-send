<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //от кого письмо
    $mail->setFrom('timfrontua@gmail.com', 'Тимур Попов');
    //кому отправить
    $mail->addAddress('bs2timur@gmail.com');
    //тема письма
    $mail->Subject = 'Данные о новом клиенте';

    //тело письма
    $body = '<h1>Новый клиент!</h1>'

    $body.='<p><strong>Name:</strong>'.$_POST['name'].'</p>';

    
    $body.='<p><strong>Company:</strong>'.$_POST['company'].'</p>';

    
    $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
    

    $body.='<p><strong>Comments:</strong>'.$_POST['comments'].'</p>';


    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Помилка';
    } else {
        $message = 'Успішно';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>