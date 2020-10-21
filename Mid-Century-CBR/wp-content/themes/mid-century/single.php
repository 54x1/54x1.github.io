<?php get_header();?>
<!-- single blog -->
<section class="hero-banner">
<?php if ( has_post_thumbnail()) : ?>
<div class="home-hero-img" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
  <div class="hero-text">
  <h1><?php single_post_title(); ?></h1>
  </div>
</div>

<?php endif; ?>
<?php if (empty(has_post_thumbnail())): ?>
<div class="home-hero-img content-none">
  <div class="hero-text">
  <h1><?php single_post_title(); ?></h1>
  </div>
</div>
<?php endif; ?>
</section>
<div class="container-fluid content content-translate">
<div class="container">
  <h1><?php the_title();?></h1>

  <?php get_template_part('includes/section', 'blogcontent');?>
  <?php comments_template(); ?>
</div>
</div>



<?php get_footer();?>
