<?php
/**
 * This controller is responsible for the events endpoint
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\Controllers;

use LudioLabs\IcalFeedSync\PostTypes\Event;

/**
 * Events controller
 */
class EventsController {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register routes
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			'ical-wp/v1',
			'/events/(?P<feed_id>\d+)',
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_events' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Get events
	 *
	 * @comment This method is not implemented yet
	 *
	 * @param \WP_REST_Request $request the WP_REST_Request object
	 *
	 * @return \WP_Error|\WP_HTTP_Response|\WP_REST_Response
	 */
	public function get_events( $request ) {
		// get feed id
		$feed_id = $request->get_param( 'feed_id' );

        $start = $request->get_param( 'start' );

        $end = $request->get_param( 'end' );

		$events = Event::get_by_feed_id( $feed_id, $start, $end );

		$response = [];

		foreach ($events as $event) {
			$response[] = [
                'id' => $event->ID,
				'title' => $event->post_title,
				'start' => get_post_meta( $event->ID, 'ifs_event_start', true ),
				'end' => get_post_meta( $event->ID, 'ifs_event_end', true ),
			];
		}

		return rest_ensure_response( $response );
	}
}
