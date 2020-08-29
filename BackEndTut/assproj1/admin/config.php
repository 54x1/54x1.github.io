<?php

/**
 * Database config
 */

$host = "localhost";
$username   = "root";
$password   = "";
$dbname     = "anidexv2";
// $username   = "nathant1";
// $password   = "47lightqwer123";
// $dbname     = "nathant1_anibase";
$dsn        = "mysql:host=$host;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );

try{
    $pdo_connection = new PDO($dsn, $username, $password, $options);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}

?>
