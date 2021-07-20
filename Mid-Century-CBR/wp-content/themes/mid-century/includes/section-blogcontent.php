<?php if (have_posts()): while(have_posts()): the_post();?>
  <!-- blogcontent -->
    <div class="content">
  <?php echo get_the_date('D jS \of F Y ');
 if (empty(get_the_author_meta('first_name'))){
  $fname = "Anonymous";
}
else{
  $fname = get_the_author_meta('first_name');
}
if (empty(get_the_author_meta('last_name'))){
  $lname = "";
}else{
    $lname = get_the_author_meta('last_name');
}
  ?>

  <p>
    Posted by <?php echo $fname;?> <?php echo $lname;?>
  </p>

<!-- this is a single post -->

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
