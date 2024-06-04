<?php

namespace LudioLabs\GoogleCalendarSync\CronJob;

class SyncFeed {

	/**
	 * Feed ID
	 * @var int
	 */
	private $feed_id;

	/**
	 * Constructor
	 * @param int $feed_id
	 */
	public function __construct( $feed_id ) {
		$this->feed_id = $feed_id;
	}

	/**
	 * Sync feed
	 * @return void
	 */
	public function run() {

	}
}