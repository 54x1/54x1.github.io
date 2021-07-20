<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Mid-Century Canberra</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel=icon type="image/x-icon" href="<?php echo get_template_directory_uri() ?>/images/favicon.ico">

  <?php wp_head();?>


</head>


<body>
<nav class="navbar sticky-top fixed-top">



  <!-- Brand -->
  <a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo get_template_directory_uri() ?>/images/logo.png" /></a>


  <!-- Toggler/collapsibe Button -->

  <!-- Navbar links -->
    <?php wp_nav_menu( array(
        'theme_location' => 'menu-header',
    'menu_class' => 'navbar-nav',

     ) );?>
     <div id="nav-icon3" class="none">

       <span></span>
       <span></span>
       <span></span>
         <div id="nav-shape">
       </div>

     </div>
  </div>
</nav>
