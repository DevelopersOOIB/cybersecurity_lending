<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require 'C:/OSPanel/domains/localhost/vendor/autoload.php'; // require __DIR__ . '/../vendor/autoload.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   $mail = new PHPMailer();
   $mail->CharSet = 'utf-8';
   $name = $_POST['form__name'];
   $phone = $_POST['form__phone'];
   $email = $_POST['form__email'];
   $promocod = $_POST['form__promocod'];

   $mail->isSMTP();
   $mail->Host  = 'ssl://smtp.yandex.ru';        
   $mail->Port  = 465;
   $mail->SMTPAuth  = true; 
   $mail->Username  = 'dpo-ib@dvfu.ru';
   $mail->Password  = 'yijvxmfndphoknah';            

   $mail->isHTML(true);

   $mail->setFrom('dpo-ib@dvfu.ru', 'Заявка ASCS');
   $mail->addAddress('dpo-ib@dvfu.ru', 'ДПО');

   $mail->Subject = 'Заявка на курс Администрирование и безопасность компьютерных систем';
   $mail->Body = 'Имя: <b>' .$name . '</b><br>Номер телефона: <b>' .$phone . '</b><br>Почта: <b>' .$email . '</b><br>Промокод: <b>' .$promocod . '</b>';
   $mail->AltBody = $name . "\n" . $phone . "\n" . $email . "\n" . $promocod;
               
   if ($mail->send()) {
       echo 'success';
   } else {
       echo 'Ошибка: ' . $mail->ErrorInfo;
   }
   exit;
}
?>