// paste lan switcher (Polylang)
<ul class="lang_switcher">
      <?php pll_the_languages(array('show_flags'=>1, 'show_names'=>1,'hide_current'=>1)); ?>
</ul>


// turn off adding extra <p>
remove_filter('the_content', 'wpautop'); (in functions.php)