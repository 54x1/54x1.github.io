<?php

//image
add_theme_support( 'post-thumbnails' );


//load bootstrap

function load_bootstrap() {
    wp_deregister_script('jquery');
    wp_enqueue_style('bootstrap4', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    wp_enqueue_script( 'boot1','https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', 'jquery', '1.0', true);
    wp_enqueue_script( 'boot2','https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', 'jquery', '1.0', true);
    wp_enqueue_script( 'boot3','https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', 'jquery', '1.0', true);
}
add_action( 'wp_enqueue_scripts', 'load_bootstrap' );

//loads css
function load_stylesheets(){
  wp_register_style('stylesheet', get_template_directory_uri().'/style.css', array(), 1.0, 'all');
  wp_enqueue_style('stylesheet');

  wp_register_style('main', get_template_directory_uri().'/css/main.css', array(), 4.3, 'all');
  wp_enqueue_style('main');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');

//loads js
function load_scripts() {
    wp_enqueue_script( 'customjs', get_template_directory_uri() . '/js/customjs.js', 'jquery', '2.5', true);
}
add_action( 'wp_enqueue_scripts', 'load_scripts' );



//Theme Options
add_theme_support('menus');

//Menus
register_nav_menus(
  array(
    //  'id' => 'name'
      'menu-header' => 'Menu Header',
      'menu-footer' => 'Menu Footer',
  )
);

//cusotm image sizes
add_image_size('blog-large', 1200, 992, true);
add_image_size('blog-large', 992, 768, true);

//reg sidebars
function my_sidebars(){

  register_sidebar(
    array(
      'name' => 'Footer',
      'id' => 'footer-sidebar',
      'before_title' => '<h4 class="widget-title">',
      'after_title' => '</h4>'
    )
  );
    register_sidebar(
      array(
        'name' => 'Blog Sidebar',
        'id' => 'blog-sidebar',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>'
      )
    );
    register_sidebar(
      array(
        'name' => 'Search Sidebar',
        'id' => 'search-sidebar',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>'
      )
    );

}
add_action('widgets_init', 'my_sidebars');

//include content from other pages
function show_post($path) {
  $post = get_page_by_path($path);
  $title = get_the_title($post);
  echo "<h2>".$title."</h2>";
  $content = apply_filters('the_content', $post->post_content);
    echo "<div class='page-content'>".$content."</div>";


}
//excerpt length
function custom_excerpt_length( $length ) {
	return 30;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );



//Custom Post type
// function custom_post_type(){
//
//   $args = array(
//       'labels' => array(
//         'name' => 'Customs',
//         'singular_name' => 'Custom',
//       ),
//       //hierachical post_type true = post | hierachical false = page
//       'hierachical' => true,
//       'public' => true,
//       'has_archive' => true,
//       'menu_icon' => 'dashicons-images-alt2',
//       'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
//       //rewrite slug url
//       //'rewrite' => array('slug' => 'custom-post-name'),
//
//   );
//   register_post_type('customs', $args);
// }
// add_action('init', 'custom_post_type');
//
// //
// function custom_taxonomy(){
//   $args = array(
//       'labels' => array(
//         'name' => 'Types',
//         'singular_name' => 'Type',
//       ),
//       //hierachical taxonomy true = category | hierachical false = tag
//       'hierachical' => true,
//       'public' => true,
//   );
//     register_taxonomy('types', array('customs'), $args);
// }
// add_action('init', 'custom_taxonomy');

?>
