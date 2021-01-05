<?php
$name = $_POST['user_name'];
$comment = $_POST['user_comment'];
$token = "1381671073:AAHrEusnKxBgqFncTp2kws7JJZaoBlMLTFI";
$chat_id = "-298729605";
$arr = array(
  '💁‍♂️ Имя пользователя: ' => $name,
  '📜 Отзыв клиента: ' => $comment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: https://umid-uz.netlify.app/jamshidbek/');
} else {
  header('Location: https://umid-uz.netlify.app/jamshidbek/');
}
?>
