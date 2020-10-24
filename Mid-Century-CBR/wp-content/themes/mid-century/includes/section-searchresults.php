<?php if (have_posts()): while(have_posts()): the_post();?>
  <!-- pagecategory -->
  <!-- found a way to add background img on to div 14/09/2020 -->
  <div class="content">
    <div class="row content-translate">
    <div class="col-sm-4">

  <?php if ( has_post_thumbnail()) : ?>
  <div class="home-hero-img content-img img-cate" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
  </div>
  <?php endif; ?>
  <?php if (empty(has_post_thumbnail())): ?>
  <div class="img-none">
    <img class="img-none" src="<?php echo get_template_directory_uri() ?>/images/none.png" />
  </div>
      <!-- <h1>No Image Avaliable</h1> -->
  <?php endif; ?>

</div>
<div class="col-sm-6">

  <h3><?php the_title();?></h3>

<?php echo "<br>" . get_the_date("d/m/Y") . "<br>"; the_excerpt(); ?>

<a class="link" href="<?php the_permalink()?>"><div class="btn btn-light">Read Mores</div></a>
</div>
</div>
</div>

<?php endwhile; else:?>
There are no results for '<?php echo get_search_query(); ?>'.
<?php endif;?>
