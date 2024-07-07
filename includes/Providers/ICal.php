<?php
/**
 * ical Provider
 *
 * @package LudioLabs\IcalFeedSync
 * @since 1.0.0
 */

namespace LudioLabs\IcalFeedSync\Providers;

use LudioLabs\IcalFeedSync\PostTypes\Event;
use Sabre\VObject;

/**
 * iCal class
 * This class is used to parse iCal feeds
 */
class ICal {

	/**
	 * iCal URL
	 *
	 * @var string
	 */
	private $url;

	/**
	 * Constructor
	 *
	 * @param string $url iCal URL
	 */
	public function __construct( $url ) {
		$this->url = $url;
	}

    /**
     * Transform date
     *
     * @param $date
     *
     * @return string
     */
    protected function transform_date($date) {
        return date('Y-m-d H:i:s', strtotime($date));
    }

	/**
	 * Get events
	 *
	 * @return array|\WP_Error
	 */
	public function get_events() {
		$events = array();

		// Use WP HTTP API to fetch the iCal feed
		if ( ! function_exists( 'wp_remote_get' ) ) {
			$ical = file_get_contents( $this->url );
		} else {
			$response = wp_remote_get( $this->url );

			$ical = wp_remote_retrieve_body( $response );
		}

		try {
			$ical = VOBject\Reader::read( $ical );

			if ( ! $ical ) {
				return $events;
			}

			// phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
			foreach ( $ical->VEVENT as $event ) {
				$dt_end = (string) $event->DTEND ?? ''; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case

				// Skip past events.
				if ( ! empty( $dt_end ) && strtotime( $dt_end ) < time() ) {
					continue;
				}

				if ( empty( $event->DTEND ) ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case

					$dt_end = (string) $event->DTSTART; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case

					if ( strtotime( $dt_end ) < time() ) {
						continue;
					}
				}

				$events[] = array(
					'ifs_event_id' => (string) $event->UID, // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
					'title' => (string) $event->SUMMARY, // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
					'post_content' => (string) $event->DESCRIPTION, // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
					'ifs_event_start' => $this->transform_date( (string) $event->DTSTART ), // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
					'ifs_event_end' => $this->transform_date( $dt_end ), // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
					'ifs_event_location' => (string) $event->LOCATION, // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
					'ifs_event_organizer' => (string) $event->ORGANIZER, // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Sabre\VObject do not follow snake case
				);

			}

			return $events;
		} catch ( \Exception $e ) {
			return new \WP_Error( 'ical_error', $e->getMessage() );
		}
	}

}
