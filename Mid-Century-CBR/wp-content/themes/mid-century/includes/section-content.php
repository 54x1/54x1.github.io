<?php if (have_posts()): while(have_posts()): the_post();?>
<!-- page -->
<?php the_content(); ?>

<?php endwhile; else: endif;?>
