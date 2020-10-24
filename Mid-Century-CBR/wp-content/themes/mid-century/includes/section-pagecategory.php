<?php if (have_posts()): while(have_posts()): the_post();?>
  <!-- pagecategory -->
  <!-- found a way to add background img on to div 14/09/2020 -->
  <div class="content mt-n2">
  <?php if ( has_post_thumbnail()) : ?>
  <div class="img-cate" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
  </div>
  <?php endif; ?>
  <?php if (empty(has_post_thumbnail())): ?>
  <div class="img-none">
      <img class="img-none" src="<?php echo get_template_directory_uri() ?>/images/none.png" />
  </div>
      <!-- <h1>No Image Avaliable</h1> -->
  <?php endif; ?>
  <div class="row justify-content-center">
  <div class="col-sm-10 pt-5">
     <h3><?php the_title();?></h3>

  <?php echo "<br><p class='mb-n3'>" . get_the_date("d/m/Y") . "</p><br>"; the_excerpt(); ?>

<a class="link" href="<?php the_permalink()?>"><div class="btn btn-light">Read Mores</div></a>
</div>
</div>
</div>


<?php endwhile; else: endif;?>
