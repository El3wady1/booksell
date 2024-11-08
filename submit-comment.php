<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    // هنا يمكنك حفظ البيانات في قاعدة البيانات أو إرسالها بالبريد
    echo "تم إرسال تعليقك بنجاح!";
}
?>
