<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
 
$mail = new PHPMailer();
$mail->CharSet = 'utf-8';
$name = $_POST['form__name'];
$phone = $_POST['form__phone'];
$email = $_POST['form__email'];
$promocod = $_POST['form__promocod'];


$mail->isSMTP();    
$mail->Host   = 'smtp.yandex.ru';
$mail->SMTPAuth   = true; 
$mail->Username   = 'mail';
$mail->Password   = 'password';  
$mail->SMTPSecure = 'ssl';        
$mail->Port   = 465;               
 
$mail->setFrom('noreply_dpo-ib@dvfu.ru', 'noreply'); 
$mail->addAddress('dpo-ib@dvfu.ru', 'ДПО');
 
$mail->Subject = 'Заявка на курс Администрирование и безопасность компьютерных систем';
$mail->Body = '' .$name . '' .$phone . '' .$email . '' .$promocod . '';
$mail->AltBody = '';
                
if ($mail->send()) {
  echo '';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
}

?>