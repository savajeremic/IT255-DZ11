<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");

if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email']) && isset($_POST['ime']) && isset($_POST['prezime'])){
	
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];

$stmt = $conn->prepare("INSERT INTO korisnici (username, password, email, ime, prezime) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $username, $password, $email, $ime, $prezime);
$stmt->execute();
echo "ok";
}
?>