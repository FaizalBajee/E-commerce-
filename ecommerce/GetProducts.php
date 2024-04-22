<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"ecommerce");

$json=file_get_contents('php://input');
$obj=json_decode($json,true);

$getSQL="select * from addproducts";

$R=mysqli_query($con,$getSQL);


//creating array

$Carray=array();

while($row=mysqli_fetch_assoc($R)){
	$Carray[]=$row;
}
echo json_encode($Carray);
$con->close();
?>