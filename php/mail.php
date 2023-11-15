<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require '/web/vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   $mail = new PHPMailer();
   $mail->CharSet = 'utf-8';
   $name = $_POST['form__name'];
   $phone = $_POST['form__phone'];
   $email = $_POST['form__email'];
   $promocod = $_POST['form__promocod'];

   $mail->isSMTP();   
   $mail->Host  = 'smtp.yandex.ru';
   $mail->SMTPAuth  = true; 
   $mail->Username  = 'dpo-ib@dvfu.ru';
   $mail->Password  = 'tetdrt'; 
   $mail->SMTPSecure = 'ssl';       
   $mail->Port  = 465;              

   $mail->setFrom('dpo-ib@dvfu.ru', 'Test'); 
   $mail->addAddress('dpo-ib@dvfu.ru', 'ДПО');

   $mail->Subject = 'Заявка на курс Администрирование и безопасность компьютерных систем';
   $mail->Body = '' .$name . '' .$phone . '' .$email . '' .$promocod . '';
   $mail->AltBody = '';
               
   if ($mail->send()) {
       echo 'success';
   } else {
       echo 'Ошибка: ' . $mail->ErrorInfo;
   }
   exit;
}
?>