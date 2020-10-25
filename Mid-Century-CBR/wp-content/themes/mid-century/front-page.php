  <?php get_header();?>
  <section class="hero home-hero">
    <?php if ( has_post_thumbnail()) : ?>
    <div class="home-hero-img img-cate" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
<div class="home-title">
        <h1><?php the_title();?></h1>
</div>
    </div>
    <?php endif; ?>
    <?php if (empty(has_post_thumbnail())): ?>
    <div class="home-hero-img content-none">
    </div>
        <!-- <h1 class="content container">No Image Avaliable</h1> -->
    <?php endif; ?>
    <div class="down-pointer">
    </div>
    <!-- <div class="down-pointer">
    </div> -->
    <div class="search content-translate d-flex justify-content-end">
        <?php  if (is_active_sidebar('search-sidebar')):?>

          <?php dynamic_sidebar('search-sidebar');?>
      <?php  endif; ?>
    </div>
  </section>

<div class="container-fluid content content-translate">



  <div class="container front">
    <div class="row grid-layout">
    <div class="col-md-12 grid order-12">
  <?php show_post('slides'); ?>
  <h1><?php the_title();?></h1>


  <?php get_template_part('includes/section', 'content');?>



    <?php show_post('timeline'); ?>
      <?php show_post('about-us'); ?>
</div>

<div class="col-md-12 backdrop grid-1">
  <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/home1.jpg')">
</div>
  </div>

<div class="col-md-12 backdrop grid-2">
  <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/img1.jpg')">
</div>
  </div>


  <div class="col-md-12 backdrop grid-3">
    <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/home3.jpg')">
  </div>
    </div>


    <div class="col-md-12 backdrop grid-4">
      <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/img2.jpg')">
  </div>
      </div>

      <div class="col-md-12 backdrop grid-5">
        <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/home4.jpg')">
    </div>
        </div>

        <div class="col-md-12 backdrop grid-6">
          <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/home5.jpg')">
      </div>
          </div>
          <div class="col-md-12 backdrop grid-7">
            <div class="shape-content"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/home6.jpg')">
        </div>
            </div>
      </div>
</div>
</div>


<?php get_footer(); ?>
