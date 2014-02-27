<?php 

	global $prod_mode;
	$prod_mode = "local";
	//$prod_mode = "staging";

	switch ($prod_mode) {
		case "local":

		$username = "root";
		$password = "root";
		$hostname = "localhost"; 
		$database = "[db-name]";

		break;


		case "staging":

		$username = "";
		$password = "";
		$hostname = ""; 
		$database = "";

		break;

	}

	$mysqli = new mysqli($hostname, $username, $password, $database);


	////
	//	Test connection...
	////

	if ($mysqli->connect_errno) {
    	
    	echo "Connect failed: %s\n", $mysqli->connect_error;
    	exit();

	} else {
		echo "Working"	
	}

?>