<?php get_header();?>
<!-- this is Search arch -->
<section class="hero-banner">
<div class="home-hero-img content-none">
  <div class="hero-text container-fluid">
  </div>
</div>
</section>
<div class="container-fluid content content-translate">
<div class="container search-page">
  <div class="searchresults content">
    <h2>Search Results for '<?php echo get_search_query(); ?>'</h2x>
  </div>

  <?php get_template_part('includes/section', 'searchresults');?>
  <?php if( get_previous_posts_link() ) {?>
    <div class="post-link p">
      <div class="btn btn-light">
    <?php previous_posts_link('< Previous Page');?>
          </div>
    </div>
  <?php } ?>
  <?php if(get_next_posts_link()) {?>
        <div class="post-link p">
                <div class="btn btn-light">
        <?php next_posts_link('Next Page >');?>
      </div>
    </div>
      <?php } ?>

</div>
</div>


<?php get_footer();?>
