<?php

namespace LudioLabs\GoogleCalendarSync\CronJob;

class SyncEvents {

	/**
	 * Sync events
	 * @return void
	 */
	public static function sync_events() {
		$ical_feeds = get_posts( array(
			'post_type' => 'gcs_ical_feed',
			'posts_per_page' => -1,
		) );

		foreach ( $ical_feeds as $ical_feed ) {
			$ical_feed = new \LudioLabs\GoogleCalendarSync\PostTypes\GCS_iCal_Feed( $ical_feed->ID );
			$ical_feed->sync_events();
		}
	}

}