<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
if (isset($_POST['tell'])) {$tell = $_POST['tell'];}
if (isset($_POST['my_range'])) {$my_range = $_POST['my_range'];}

$to = "yayewa6533@nifect.com"; /*Укажите ваш адрес электоронной почты*/
$headers = "Content-type: text/plain; charset = utf-8"."\r\n".           "From:info@ac-u.ru";
$subject = "Заявка с вашего сайта a606.ru";
$message = "Имя пославшего: ".$name."\nТелефон: ".$phone."\nEmail: ".$mail."\nTell: ".$tell."";
$send = mail ($to, $subject, $message, $headers);
// header('Location: /thanks-page.html');
?>