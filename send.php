<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$button = $_POST['button'];


if ($button == 'sendContacts'){
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

if ($button == 'sendEmail'){
    $title = "Зарегистрирован новый подписчик Best Tour Plan";
    $body = "
    <h2>Новый подписчик</h2><br>
    <b>Почта подписчика:</b><br>$email
    ";
}

if ($button == 'sendMessage'){
    $title = "Зарегистрирован новый подписчик Best Tour Plan";
    $body = "
    <h2>Новый подписчик</h2><br>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Почта подписчика:</b><br>$email
    ";
}
// Формирование самого письма


// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование самого письма

// Настройки PHPMailer 
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'elizaveta.oleynik.ru@gmail.com'; // Логин на почте
    $mail->Password   = '123456789lizaza'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('elizaveta.oleynik.ru@gmail.com', 'Елизавета Олейник'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('oleynik.elizaveta1995@gmail.com');  

 
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата


if ($button == 'sendMessage' and $button == 'sendContacts'){
    header('location: thankyou.html');
}

if ($button == 'sendEmail'){
    header('location: subscriber.html');
}


