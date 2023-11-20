<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require __DIR__ . '/../vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 $mail = new PHPMailer();
 $mail->CharSet = 'utf-8';

 if(!empty($_POST['form__name1']) && !empty($_POST['form__phone1']) && !empty($_POST['form__email1'])){
  $name = $_POST['form__name1'];
  $phone = $_POST['form__phone1'];
  $email = $_POST['form__email1'];
  $promocod = $_POST['form__promocod1'];
 } elseif(!empty($_POST['form__name2']) && !empty($_POST['form__phone2']) && !empty($_POST['form__email2'])){
  $name = $_POST['form__name2'];
  $phone = $_POST['form__phone2'];
  $email = $_POST['form__email2'];
  $promocod = $_POST['form__promocod2'];
 } else {
  echo 'Ошибка: обе формы пустые';
  exit;
 }

 $mail->isSMTP();
 $mail->Host = 'ssl://smtp.yandex.ru';      
 $mail->Port = 465;
 $mail->SMTPAuth = true; 
 $mail->Username = 'mail';
 $mail->Password = 'йцукен';          

 $mail->isHTML(true);

 $mail->setFrom('dpo-ib@dvfu.ru', 'Заявка ASCS');
 $mail->addAddress('dpo-ib@dvfu.ru', 'ДПО');

 $mail->Subject = 'Заявка на курс Администрирование и безопасность компьютерных систем';
 $mail->Body = 'Имя: <b>' .$name . '</b><br>Номер телефона: <b>' .$phone . '</b><br>Почта: <b>' .$email . '</b><br>Промокод: <b>' .$promocod . '</b>';
 $mail->AltBody = $name . "\n" . $phone . "\n" . $email . "\n" . $promocod;
             
 try {
     if ($mail->send()) {
         echo 'success';
     } else {
         echo 'Ошибка: ' . $mail->ErrorInfo;
     }
 } catch (Exception $e) {
     echo 'Ошибка: ' . $e->getMessage();
 }
 exit;
}
?>
