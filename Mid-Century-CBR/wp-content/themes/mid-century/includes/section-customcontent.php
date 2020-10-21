<?php if (have_posts()): while(have_posts()): the_post();?>
  <!-- customcontent -->
    <div class="content">

<!-- "this is a custom post" -->

<?php the_content(); ?>

<?php $tags = get_the_tags();
  if (!empty($tags)){?>
    <h3>Tag</h3>
    <?php
foreach ($tags as $tag):?>
<a href="<?php echo get_tag_link($tag->term_id);?>">
<?php echo $tag->name;?>
</a>
<?php
endforeach;
  }
$categories = get_the_category();
    if (!empty($categories)){?>
            <h3>Category</h3>
            <?php
  foreach ($categories as $cat):?>
  <a href="<?php echo get_category_link($cat->term_id);?>">
  <?php echo $cat->name;?>
  </a>
  <?php
  endforeach;
    }
    ?>
</div>

<?php endwhile; else: endif;?>
