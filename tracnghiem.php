<?php include "connect.php"; ?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trắc nghiệm Ma Trận</title>
    <link rel="stylesheet" href="tn.css">
</head>
<body>

<h2>Câu hỏi trắc nghiệm</h2>

<?php
$sql = "SELECT * FROM cauhoi LIMIT 1";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
?>

<form action="xuly.php" method="post">
    <p><strong><?php echo $row['noidung']; ?></strong></p>

    <input type="hidden" name="dapandung" value="<?php echo $row['dapandung']; ?>">

    <label>
        <input type="radio" name="ans" value="A" required>
        <?php echo $row['A']; ?>
    </label><br>

    <label>
        <input type="radio" name="ans" value="B">
        <?php echo $row['B']; ?>
    </label><br><br>

    <button type="submit">Nộp bài</button>
</form>

</body>
</html>
