<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST");

$severName = "localhost";
$username = "root";
$password = "";
$databaseName  = "login";
$conn = mysqli_connect($severName , $username , $password , $databaseName);

if((!isset($_POST['email'])))
{
   echo "0"; 
   exit();
}
$Email = $_POST["email"];

$queryget = "SELECT * FROM logintable WHERE userName='$Email' ";
$Email = stripslashes($email);
$res_e = mysqli_query($conn,$Email);

if(mysqli_num_rows($res_p) > 0 && mysqli_num_rows($res_e) > 0)
{
echo "1";
}
else
{
  echo "0";
}

mysqli_close($conn);


?>