<form action="<?php echo home_url( '/' ); ?>" method="get">
  <!-- <label for="search">Search</label> -->
    <!-- <input type="hidden" name="cat" value=""/> search in a particular category -->
    <div class="search-section">
      <input type="text" name="s" placeholder="Search..." id="search" value="<?php the_search_query();?>" required>
      <button class="searchicon-section btn" type="submit"><img class="searchicon" src="<?php echo get_template_directory_uri() ?>/images/search.png" /></button>

    </div>

</form>
