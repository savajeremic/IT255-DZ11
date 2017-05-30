<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");

if(isset($_POST['type']) && isset($_POST['price']) && ($_POST['price'] <= 5000)){
	
$type = $_POST['type'];
$price = intval($_POST['price']);

$stmt = $conn->prepare("INSERT INTO clothing (type, price) VALUES (?, ?)");
$stmt->bind_param("ss",$type, $price);
$stmt->execute();
echo "ok";
}
?>