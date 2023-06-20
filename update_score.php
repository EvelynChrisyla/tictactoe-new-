
<?php
$host = "tiktaktoedatabase.cqgapuqaeazu.us-east-1.rds.amazonaws.com";
$port = 5432;
$dbname = "tiktaktoe";
$user = "postgres";
$password = "admin1234";

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
  die("Connection failed: " . pg_last_error());
}

$name = $_POST['name'];
$score = $_POST['score'];

$query = "INSERT INTO scores (name, score) VALUES ('$name', $score)";

$result = pg_query($conn, $query);
if (!$result) {
  die("Query failed: " . pg_last_error());
}

pg_close($conn);
?>
