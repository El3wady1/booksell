<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "your-email@example.com";
        $subject = "رسالة جديدة من موقعك";
        $body = "الاسم: $name\nالبريد الإلكتروني: $email\n\nالرسالة:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            header("Location: index.html?status=success");
        } else {
            header("Location: index.html?status=error");
        }
    } else {
        header("Location: index.html?status=missing_fields");
    }
}
?>
