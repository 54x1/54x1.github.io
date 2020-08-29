<?php

session_start();

// Check if the user is already logged in, if yes then redirect him to welcome page
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){

    }
    else{
    header("location: login.php");
    exit;
    }

// Include config file
$title = "Add Anime";
$act4 = "active";
$act1=$act2=$act3 = "";
include "./includes/header.php";

if (isset($_POST['submit'])) {

    // include the config file that we created before
require_once "./admin/config.php";

    // this is called a try/catch statement
	try {
        // FIRST: Connect to the database
        $connection = new PDO($dsn, $username, $password, $options);
$animename = $_POST['animename'];
        // echo $animeid;
        // THIRD: Turn the array into a SQL statement
        $sql3 = "INSERT INTO anibase (userid, episodes, animename) VALUES (:userid, :episodes, :animename)";

        // FOURTH: Now write the SQL to the database
        $statement3 = $connection->prepare($sql3);
        $statement3->bindValue(':userid', $_SESSION['id']);
      $statement3->bindValue(":animename", $animename);
      $statement3->bindValue(':episodes', $_POST['episodes']);
        $statement3->execute();


	} catch(PDOException $error) {
        // if there is an error, tell us what it is
		echo $sql3 . "<br>" . $error->getMessage();
	}
}

if (!empty($_GET['name'])){
  $name = $_GET['name'];
}
else{
  $name = "";
}
?>

<div class="container-fluid">
  <?php if (isset($_POST['submit']) && $statement3) {?>
  <p>Anime Successfully Added.</p>
<?php }?>
    <h2>Add to Anime Database</h2>

    <form method="post" class="col-xs-6 col-md-3">
      <div class="form-group">

  <label for="animename">Anime Name</label>
  <input required type="text" value="<?php echo $name ?>" name="animename" id="animename" class="form-control">
</div>
      <div class="form-group">
  <label for="episodes">Episodes Watched</label>
  <input required type="number" name="episodes" id="episodes" class="form-control">

</div>
  <!-- <label for="synopsis">synopsis</label>
  <input required type="text" name="synopsis" id="synopsis"> -->

  <input type="submit" name="submit" value="Submit">

  </form>


</div>
  </body>

  </html>
