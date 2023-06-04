<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tictactoe";

$name = $_POST['name'];
$score = $_POST['score'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO scores (name, score) VALUES ('$name', '$score')";

if ($conn->query($sql) === TRUE) {
  echo "Score saved successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
