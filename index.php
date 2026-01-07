<?php
include "connect.php";
$sql = "SELECT * FROM cauhoi ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
?>

<form method="post" action="xuly.php">
    <p><?= $row['noidung'] ?></p>

    <input type="radio" name="answer" value="A"> <?= $row['a'] ?><br>
    <input type="radio" name="answer" value="B"> <?= $row['b'] ?><br>
    <input type="radio" name="answer" value="C"> <?= $row['c'] ?><br>
    <input type="radio" name="answer" value="D"> <?= $row['d'] ?><br>

    <input type="hidden" name="dap_an" value="<?= $row['dap_an'] ?>">
    <button type="submit">Nộp bài</button>
</form>
