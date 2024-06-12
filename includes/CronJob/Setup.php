<?php

namespace LudioLabs\IcalFeedSync\CronJob;

class Setup {

	/**
	 * Setup the cron job
	 *
	 * @return void
	 */
	public static function setup() {
		if ( ! wp_next_scheduled( 'ifs_sync_feed' ) ) {
			wp_schedule_event( time(), 'hourly', 'ifs_sync_feed' );
		}

		add_action( 'ifs_sync_feed', [ __CLASS__, 'run' ] );

		// Check if there is a transient with an error message
		add_action( 'admin_notices', [ __CLASS__, 'show_error_message' ] );
	}

	/**
	 * Show an error message
	 *
	 * @return void
	 */
	public static function show_error_message() {
		$error = get_transient( 'ifs_sync_feed_error' );

		if ( ! $error ) {
			return;
		}

		?>
		<div class="notice notice-error">
			<p><?php echo esc_html( $error ); ?></p>
		</div>
		<?php

        delete_transient( 'ifs_sync_feed_error' );
	}

	/**
	 * Remove the cron job
	 *
	 * @return void
	 */
	public static function remove() {
		wp_clear_scheduled_hook( 'ifs_sync_feed' );
	}

	/**
	 * Run the cron job
	 */
	public static function run() {
		$feeds = get_posts([
			'post_type' => 'ifs_ical_feed',
			'posts_per_page' => -1,
			'fields' => 'ids',
			'post_status' => 'publish',
		]);


		foreach ( $feeds as $feed ) {
			$sync = new SyncFeed( $feed );
			$sync->run();
		}
	}
}