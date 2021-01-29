<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST");

$severName = "localhost";
$username = "root";
$password = "";
$databaseName  = "login";
$conn = mysqli_connect($severName , $username , $password , $databaseName);

$query = "INSERT INTO  logintable(userName , pw  ,ID , email) VALUES  ('Chalana' , '123'  , 1 , 'chalana@gmail.com')";

if(mysqli_query($conn , $query)){
  echo "Data hasbeen inserted";
}else{
  echo "Error";
}

if((!isset($_POST['email'])) && (!isset($_POST['password'])))
{
   echo "0"; 
   exit();
}


$Email = $_POST["email"];
$Password = $_POST["password"];

$email = "SELECT * FROM logintable WHERE userName='$Email' ";
$pass = "SELECT * FROM logintable WHERE pw ='$Password' ";

$Email = stripslashes($email);
$Password = stripslashes($password);
$res_e = mysqli_query($conn,$Email);
$res_p = mysqli_query($conn,$Password);

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