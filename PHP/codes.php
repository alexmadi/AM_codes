// paste lan switcher (Polylang)
<ul class="lang_switcher">
      <?php pll_the_languages(array('show_flags'=>1, 'show_names'=>1,'hide_current'=>1)); ?>
</ul>

 <?php 
if (function_exists('pll_the_languages')) {
	pll_the_languages(array('show_flags'=>1, 'show_names'=>1,'hide_current'=>1));
}
?>

// turn off adding extra <p>
remove_filter('the_content', 'wpautop'); (in functions.php)

add_filter('pre_get_document_title', 'change_404_title');
function change_404_title($title) {
    if (is_404()) {
        return 'My Custom Title';
    }
    return $title;
}