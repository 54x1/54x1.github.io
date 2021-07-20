<?php
$db = mysqli_connect('localhost','root','','tawed');
// Check connection
if (mysqli_connect_errno()){
    echo 'Database connection failed with the following error(s): '. mysqli_connect_error();
    die();
}
?>