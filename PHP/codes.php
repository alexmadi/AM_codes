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





    function myplugin_register_options_page() {
        add_options_page('Page Title', 'Custom Preferences', 'manage_options', 'myplugin', 'myplugin_options_page');
      }
      add_action('admin_menu', 'myplugin_register_options_page');
      function myplugin_options_page() {
      ?>
        <div class="custom-prefs">
        <h2>Custom Preferences</h2>
        <form method="post" action="options.php">
        <?php settings_fields( 'myplugin_options_group' ); ?>
            <table>
                <tr valign="top">
                    <th scope="row"><label for="myplugin_option_name">BP_mobile</label></th>
                    <td><input type="text" id="myplugin_option_name" name="myplugin_option_name" value="<?php echo get_option('myplugin_option_name'); ?>" /></td>
                </tr>
            </table>
        <?php  submit_button(); ?>
        </form>
        </div>
      <?php
      }