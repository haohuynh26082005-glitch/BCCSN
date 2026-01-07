<?php
$conn = mysqli_connect("localhost", "root", "", "tracnghiem");

if (!$conn) {
    die("Kết nối CSDL thất bại!");
}
mysqli_set_charset($conn, "utf8");
?>
