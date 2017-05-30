<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");

if(isset($_POST['gameName']) && isset($_POST['gameGenre']) && isset($_POST['gamePegi']) && ($_POST['gamePegi'] <= 18)){
	
$gameName = $_POST['gameName'];
$gameGenre = $_POST['gameGenre'];
$gamePegi = intval($_POST['gamePegi']);

$stmt = $conn->prepare("INSERT INTO game (gameName, gameGenre, gamePegi) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $gameName, $gameGenre, $gamePegi);
$stmt->execute();
echo "ok";
}
?>