<?php
/**
 * Template file for the Google Calendar Sync admin page
 */
?>

<div class="wrap">

  <div id="gcs__settings-header">
    <div class="gcs__settings-header__title">
		<h1><?php esc_html_e('Google Calendar Sync', 'google-calendar-sync'); ?></h1>
    </div>

	  <?php if ( isset ( $_GET['success_connected'] ) && absint( $_GET[ 'success_connected' ] ) === 1 ) : ?>
        <div class="gcs__settings-header__success">
			<?php esc_html_e('Connected successfully', 'google-calendar-sync'); ?>
        </div>
	  <?php endif; ?>

    <?php if ( isset ( $_GET['error_connected'] ) && absint( $_GET[ 'error_connected' ] ) === 1 ) : ?>
        <div class="gcs__settings-header__error">
                <?php esc_html_e('Error connecting to Google Calendar', 'google-calendar-sync'); ?>
        </div>
    <?php endif; ?>

    <form method="post" action="options.php">
      <?php
      settings_fields('google-calendar-sync');
      do_settings_sections('google-calendar-sync');
      submit_button();
      ?>
    </form>
  </div>

</div>