<?php
$con = mysqli_connect("localhost:8111","root","");
$DB = mysqli_select_db($con ,"ecommerce");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$image=$obj['Image'];
$name=$obj['Name'];
$price=$obj['Price'];
$des=$obj['Description'];

$Add="INSERT INTO `addproducts`( `Name`, `Price`, `Description`,Image) VALUES ('$name','$price','$des','$image')";

$B=mysqli_query($con,$Add);

if($B){
$MSG='Updated';
	$json=json_encode($MSG);
	echo $json;
}
else{
	$MSG='Failed';
	$json=json_encode($MSG);
	echo $json;
}
mysqli_close($con);
?>
