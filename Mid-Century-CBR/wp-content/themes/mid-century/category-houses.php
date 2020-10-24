<?php get_header();?>
<!-- this is custom archive -->
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
<div class="content-translate container mt-n2 pb-5">
  <h2>Locations</h2>
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1efHjr0qERlqNBKfRQvJ0fR1230UnB69r" width="100%" height="480"></iframe>
</div>
<div class="container-fluid content content-translate">
<div class="container">


  <?php get_template_part('includes/section', 'pagecategory');?>
  <?php previous_posts_link();?>
  <?php next_posts_link();?>

</div>
</div>


<?php get_footer();?>
