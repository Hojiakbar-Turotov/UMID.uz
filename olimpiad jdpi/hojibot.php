<?php
date_default_timezone_set('Asia/Tashkent');
define('API_KEY', '1455550727:AAFEbahKLAPUTbvz6sh0xlMLYT1K9awhle8');
//https://api.telegram.org/bot1455550727:AAFEbahKLAPUTbvz6sh0xlMLYT1K9awhle8/setWebHook?url=https://umid-uz.netlify.app/olimpiad%20jdpi/hojibot.php
function bot($method, $datas = []){
    $url = "https://api.telegram.org/bot".API_KEY."/" . $method;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $datas);
    $res = curl_exec($ch);
    curl_close($ch);
    if (!curl_error($ch)) return json_decode($res);
};
file_put_contents("log.json", file_get_contents('php://input'));
function html($text){
    return str_replace(['<','>'],['&#60;','&#62;'],$text);
};
$update = json_decode(file_get_contents('php://input'));
// message variables
$message = $update->message;
$text = html($message->text);
$chat_id = $message->chat->id;
$from_id = $message->from->id;
$username = $message->from->username;
$message_id = $message->message_id;
$first_name = $message->from->first_name;
$last_name = $message->from->last_name;
$full_name = html($first_name . " " . $last_name);
// replymes
$reply_to_message = $message->reply_to_message;
$reply_chat_id = $message->reply_to_message->forward_from->id;
$reply_text = html($message->text);
//  call_back datas
$callback = $update->callback_query;
$data = $callback->data;
$cb_text = $callback->message->text;
$cb_id = $callback->id;
$cb_chat_id = $callback->message->chat->id;
$cb_data = $callback->data;
$cb_type = $callback->message->chat->type;
$cb_message_id = $callback->message->message_id;
$cb_first_name = $callback->from->first_name;
$cb_last_name = $callback->from->last_name;
$cb_full_name = html($cb_first_name . " " . $cb_last_name);

if($text != "/start"){
    bot('forwardMessage', [
        'chat_id' => "-1001140239913",
        'from_chat_id' => $chat_id,
        'message_id' => $message_id,
    ]);
};
?>