<?php get_header();?>
<!-- this is archive -->
<section class="hero-banner">
<?php if ( has_post_thumbnail()) : ?>
<div class="home-hero-img" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
  <div class="hero-text">
  <h1><?php single_cat_title(); ?></h1>
  </div>
</div>

<?php endif; ?>
<?php if (empty(has_post_thumbnail())): ?>
<div class="home-hero-img content-none">
  <div class="hero-text container-fluid">
  <h1><?php single_cat_title(); ?></h1>
        <!-- <h1>No Image Avaliable</h1> -->
  </div>
</div>
<?php endif; ?>
</section>
<div class="container-fluid content-translate">
<div class="container">

  <?php get_template_part('includes/section', 'pagecategory');?>
<?php if( get_previous_posts_link() ) {?>
  <div class="post-link p btn btn-light">
  <?php previous_posts_link('< Previous Page');?>
  </div>
<?php } ?>
<?php if(get_next_posts_link()) {?>

      <div class="post-link btn btn-light"><?php next_posts_link('Next Page >');?></div>

  <?php } ?>
</div>
</div>


<?php get_footer();?>
