<?php get_header();?>
<!-- this is the category blog -->
<section class="hero-banner">
  <?php if ( has_post_thumbnail()) : ?>
  <div class="home-hero-img img-cate" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
  </div>
  <?php endif; ?>
  <?php if (empty(has_post_thumbnail())): ?>
  <div class="home-hero-img content-none">
  </div>
      <h1>No Image Avaliable</h1>
  <?php endif; ?>
</section>
<div class="container-fluid content">
<div class="container">


  <?php get_template_part('includes/section', 'pagecategory');?>
  <?php previous_posts_link();?>
  <?php next_posts_link();?>

</div>
</div>


<?php get_footer();?>
