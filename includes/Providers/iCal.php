<?php

namespace LudioLabs\GoogleCalendarSync\Providers;

/**
 * iCal class
 * This class is used to parse iCal feeds
 * @package LudioLabs\GoogleCalendarSync\Providers
 * @version 1.0
 */
class iCal {

	/**
	 * iCal URL
	 * @var string
	 */
	private $url;

	/**
	 * Constructor
	 * @param string $url
	 */
	public function __construct( $url ) {
		$this->url = $url;
	}

	/**
	 * Get events
	 * @return array
	 */
	public function get_events() {
		$events = array();

		// Use WP HTTP API to fetch the iCal feed
		$response = wp_remote_get( $this->url );
		$ical = wp_remote_retrieve_body( $response );

		$ical = explode( "BEGIN:VEVENT", $ical );

		foreach ( $ical as $event ) {
			$event = explode( "END:VEVENT", $event );
			$event = $event[0];

			$event = explode( "\n", $event );

			$event_data = array();

			foreach ( $event as $line ) {
				$line = explode( ":", $line );
				$key = $line[0];
				$value = $line[1];

				$event_data[ $key ] = $value;
			}

			$events[] = $event_data;
		}

		return $events;
	}
}