<?php
/**
 * Sync feed
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\CronJob;

use LudioLabs\IcalFeedSync\PostTypes\IcalFeed;
use LudioLabs\IcalFeedSync\Providers\ICal;

/**
 * Sync feed
 *  This class is responsible for syncing a feed with cron job
 */
class SyncFeed {

	/**
	 * Feed ID
	 *
	 * @var int
	 */
	private $feed_id;

	/**
	 * Constructor
	 *
	 * @param int $feed_id  Feed ID
	 */
	public function __construct( $feed_id ) {
		$this->feed_id = $feed_id;
	}

	/**
	 * Set transient error
	 *
	 * @param $message
	 *
	 * @return void
	 */
	public function set_transient_error($message) {
		set_transient(
			'ifs_sync_feed_error',
			$message,
			60 * 5 );
	}

	/**
	 * Sync feed
	 *
	 * @return void
	 */
	public function run() {
		// Remove transient
		delete_transient( 'ifs_sync_feed_error' );

		// Get feed URL by feed ID
		$feed_url = IcalFeed::get_ical_url( $this->feed_id );

		if ( ! $feed_url ) {
			$this->set_transient_error( __( 'Feed URL not found for: #', 'ical-feed-sync' ) . $this->feed_id );
			return;
		}

		$provider = new ICal( $feed_url );

		$events = $provider->get_events();

		if ( is_wp_error( $events ) ) {
			$this->set_transient_error( $events->get_error_message() );
			return;
		}

		$event_job = new SyncEvents();

		foreach ( $events as $event ) {
			// Sync event
			$event['ifs_event_feed_id'] = $this->feed_id;
			$event_job->sync( $event );
		}
	}
}
