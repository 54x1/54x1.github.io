<footer>

    <div class="footer container content">
      <section class="grid-layout-2">
        <?php  if (is_active_sidebar('footer-sidebar')):?>

          <?php dynamic_sidebar('footer-sidebar');?>
      <?php  endif; ?>
      </section>
  <?php //wp_nav_menu( array(
  //   'theme_location' => 'menu-footer',
  // 'menu_class' => 'navbar-footer',

   // ) ); ?>
</div>

</footer>

<?php wp_footer();?>
</body>
</html>
