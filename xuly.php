<?php
$user_ans = $_POST['ans'];
$correct = $_POST['dapandung'];

echo "<h2>Kết quả</h2>";

if ($user_ans == $correct) {
    echo "<p style='color:green'>✅ Bạn trả lời ĐÚNG</p>";
} else {
    echo "<p style='color:red'>❌ Bạn trả lời SAI</p>";
}

echo "<a href='tracnghiem.php'>Làm lại</a>";
?>
