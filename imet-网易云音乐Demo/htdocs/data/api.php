<?php

$callback=$_GET["key"];
$data=array("name"=>"tom","age"=>18);
echo $callback."(".json_encode($data).")";



?>