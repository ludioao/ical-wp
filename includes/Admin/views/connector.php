<?php
/**
 * Template file for the Google Calendar Sync admin page
 *
 * @package LudioLabs\IcalFeedSync
 */

?>

<div class="wrap">

  <div id="ifs__settings-header">
	<div class="ifs__settings-header__title">
		<h1><?php esc_html_e( 'Google Calendar Sync', 'ical-feed-sync' ); ?></h1>
	</div>

	  <?php if ( isset( $_GET['success_connected'] ) && absint( $_GET['success_connected'] ) === 1 ) : ?>
		<div class="ifs__settings-header__success">
			<?php esc_html_e( 'Connected successfully', 'ical-feed-sync' ); ?>
		</div>
	  <?php endif; ?>

	<?php if ( isset( $_GET['error_connected'] ) && absint( $_GET['error_connected'] ) === 1 ) : ?>
		<div class="ifs__settings-header__error">
				<?php esc_html_e( 'Error connecting to Google Calendar', 'ical-feed-sync' ); ?>
		</div>
	<?php endif; ?>

	<form method="post" action="options.php">
	  <?php
		settings_fields( 'ical-feed-sync' );
		do_settings_sections( 'ical-feed-sync' );
		submit_button();
		?>
	</form>
  </div>

</div>